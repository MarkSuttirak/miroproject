import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    orgName: v.string(),
    orgId: v.string(),
    title: v.string(),
    favourite: v.boolean()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity){
      throw new Error("Unauthorized")
    }

    const defaultImage = '/next.svg'

    return await ctx.db.insert("boards", {
      orgName: args.orgName,
      orgId: args.orgId,
      title: args.title,
      authorId: identity.subject,
      authorName: identity.name!,
      favourite: args.favourite,
      imageUrl: defaultImage
    })
  }
})

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity){
      throw new Error("Unauthorized")
    }

    return await ctx.db.query("boards").collect()
  }
})

export const remove = mutation({
  args: {
    id: v.id("boards")
  },
  handler: async(ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity){
      throw new Error("Unauthorized")
    }

    await ctx.db.delete(args.id)
  }
})

export const favourite = mutation({
  args: {
    id: v.id("boards"),
    favourite: v.boolean(),
    orgId: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity){
      throw new Error("Unauthorized")
    }

    const board = await ctx.db.get(args.id);

    if (!board){
      throw new Error("Board not found")
    }
  }
})