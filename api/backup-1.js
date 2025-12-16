module.exports = (req, res) => {
  // Mendapatkan IP asli pengunjung (melewati proxy Vercel)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Mengembalikan JSON
  res.status(200).json({
    ip: ip,
    user_agent: req.headers['user-agent'],
    method: req.method
  });
};
