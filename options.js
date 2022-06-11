module.exports = {
  port: process.env.PORT || 3000,
  corsOptions: { origin: "*" },
  sessionSecret: process.env.SESSION_SECRET || 'thesecretlifeofarabia',
  APIKey: '911b4173468d4b41ae7174010222605'
}