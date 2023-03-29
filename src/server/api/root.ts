import { createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "./routers/authRouter";
import { networkMemberRouter } from "./routers/networkMemberRouter";
import { networkRouter } from "./routers/networkRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  network: networkRouter,
  networkMember: networkMemberRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;