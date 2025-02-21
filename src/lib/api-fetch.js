export async function apiFetch(url, options = {}) {
  try {
    // Fetch token from next-auth session (modify as per your auth setup)
    const token = null; // TODO: from cookies

    // Default headers
    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    };

    // Merge user-provided options
    const mergedOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const response = await fetch(process.env.BASE_URL + url, mergedOptions);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Fetch Error:", error.message);
    throw error;
  }
}
