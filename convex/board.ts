import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
    favourite: v.boolean()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity){
      throw new Error("Unauthorized")
    }

    // const board = await ctx.db.insert("boards", {
    //   orgId: args.orgId,
    //   title: args.title,
    //   authorId: identity.subject,
    //   authorName: identity.name!,
    //   favourite: args.favourite
    // })
  }
})