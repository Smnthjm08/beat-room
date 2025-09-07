import z from "zod";

export const createStreamScehma = z.object({
    userId: z.string(),
    type: z.enum(["Spotify", "Youtube"])
})