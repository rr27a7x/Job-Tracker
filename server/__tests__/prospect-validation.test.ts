import { validateProspect } from "../prospect-helpers";

describe("prospect creation validation", () => {
  test("rejects a blank company name", () => {
    const result = validateProspect({
      companyName: "",
      roleTitle: "Software Engineer",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Company name is required");
  });

  test("rejects a blank role title", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Role title is required");
  });

  test("accepts a valid prospect without deadline", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Software Engineer",
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("accepts a valid prospect with deadline", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Software Engineer",
      deadline: "2025-06-15",
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("accepts a prospect with null deadline", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Software Engineer",
      deadline: null,
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("rejects an invalid deadline string", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Software Engineer",
      deadline: "not-a-date",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Deadline must be a valid date");
  });

  test("rejects a non-string deadline", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Software Engineer",
      deadline: 12345,
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Deadline must be a valid date");
  });
});
