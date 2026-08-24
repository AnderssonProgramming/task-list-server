const jwt = require("jsonwebtoken");

// Middleware: validates the JWT sent in the Authorization header
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Authorization header is required" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      error: "Authorization header must be in the format: Bearer <token>",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      const message =
        err.name === "TokenExpiredError" ? "Token has expired" : "Invalid token";
      return res.status(401).json({ error: message });
    }

    req.user = decoded;
    next();
  });
}

module.exports = authenticateToken;
