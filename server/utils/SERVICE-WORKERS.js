import MessageModel from "../models/MessageModel.js";
import PostModel from "../models/PostModel.js";
import { io } from "../socket/socket.js";

// Function to delete expired posts
export const checkForPostExpiration = async () => {
    try {
        const posts = await PostModel.find();
        const now = Date.now();

        posts.forEach(async (post) => {
            console.log(post.createdAt.getTime() + post.expiresAt * 1000);
            if (post.createdAt.getTime() + post.expiresAt * 1000 < now) {
                await PostModel.findByIdAndDelete(post._id);
                console.log(`Deleted expired post: ${post._id}`);
                const postId = post._id;
                io.emit("disappearPost", postId);
            }
        });
    } catch (err) {
        console.error("Error checking post expiration:", err);
    }
};
export const checkForMessageExpiration = async () => {
    try {
        const Messages = await MessageModel.find();
        const now = Date.now();
        Messages.forEach(async (message) => {
            if (message.createdAt.getTime() + 24 * 60 * 60 * 1000 < now) {
                await MessageModel.findByIdAndDelete(message._id);
                console.log(`Deleted expired message: ${message._id}`);
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

