const GithubStrategy = require("passport-github");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new GithubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    // Your user authentication logic here.
    // 'profile' contains user information returned by GitHub.
    //console.log(profile);
    const { displayName, provider, emails } = profile;
    const [{ value: email }] = emails;
    console.log(email);
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });

    //2. Insert nếu không có hoặc lấy id nếu đã có
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }

    providerId = providerDetail.id;

    //3. Kiểm tra trong bảng users xem đã có users với provider_id hay chưa?
    let user = await User.findOne({
      where: {
        email,
        provider_id: providerId,
      },
    });

    //4. Insert vào bảng users nếu chưa có hoặc lấy ra user nếu đã có
    if (!user) {
      user = await User.create({
        name: displayName,
        email,
        provider_id: providerId,
      });
    }

    //5. Return về hàm done với thông user lấy được để passport tự  động xử lý đăng nhập
    return done(null, user);
  }
);
