function authProxyMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token || !isValidToken(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Nếu hợp lệ → tiếp tục gọi handler thực sự
  next();
}
