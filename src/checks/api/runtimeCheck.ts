export async function runtimeCheck() {
    try {
      const response = await fetch(process.env.API_URL || "");
  
      console.log("API status:", response.status);
    } catch (error) {
      console.error("Runtime service unavailable");
      throw error;
    }
  }