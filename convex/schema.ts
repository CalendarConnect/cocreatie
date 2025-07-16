import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  pricingCalculatorSubmissions: defineTable({
    // Contact Information
    companyName: v.string(),
    contactName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    
    // Team Information
    teamSize: v.string(),
    departments: v.array(v.string()),
    currentChallenges: v.optional(v.string()),
    
    // AI Usage Information
    aiExperience: v.string(),
    desiredOutcomes: v.array(v.string()),
    specificUseCases: v.optional(v.string()),
    
    // Investment Information
    monthlyInvestment: v.string(),
    expectedROI: v.string(),
    timelineUrgency: v.string(),
    
    // Calculated Values
    calculatedPrice: v.number(),
    packageType: v.string(),
    
    // Metadata
    submittedAt: v.number(),
    status: v.string(), // "new", "contacted", "qualified", "converted"
    notes: v.optional(v.string()),
  }),
  
  // For storing follow-up actions
  followUps: defineTable({
    submissionId: v.id("pricingCalculatorSubmissions"),
    scheduledFor: v.number(),
    type: v.string(), // "email", "call", "meeting"
    completed: v.boolean(),
    notes: v.optional(v.string()),
  }),
  
  // For storing contact form submissions
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    message: v.string(),
    createdAt: v.string(),
  }),
});