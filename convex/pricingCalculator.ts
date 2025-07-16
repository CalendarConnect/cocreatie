import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Mutation to create a new pricing calculator submission
export const createSubmission = mutation({
  args: {
    companyName: v.string(),
    contactName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    teamSize: v.string(),
    departments: v.array(v.string()),
    currentChallenges: v.optional(v.string()),
    aiExperience: v.string(),
    desiredOutcomes: v.array(v.string()),
    specificUseCases: v.optional(v.string()),
    monthlyInvestment: v.string(),
    expectedROI: v.string(),
    timelineUrgency: v.string(),
    calculatedPrice: v.number(),
    packageType: v.string(),
  },
  handler: async (ctx, args) => {
    const submission = await ctx.db.insert("pricingCalculatorSubmissions", {
      ...args,
      submittedAt: Date.now(),
      status: "new",
    });
    
    return submission;
  },
});

// Query to get all submissions (for admin dashboard)
export const getAllSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("pricingCalculatorSubmissions")
      .order("desc")
      .collect();
  },
});

// Query to get submissions by status
export const getSubmissionsByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("pricingCalculatorSubmissions")
      .filter((q) => q.eq(q.field("status"), args.status))
      .order("desc")
      .collect();
  },
});

// Mutation to update submission status
export const updateSubmissionStatus = mutation({
  args: {
    id: v.id("pricingCalculatorSubmissions"),
    status: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, status, notes } = args;
    
    await ctx.db.patch(id, {
      status,
      ...(notes && { notes }),
    });
    
    return { success: true };
  },
});