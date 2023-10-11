const FacebookStrategy = require("passport-facebook");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    state: true,
    profileFields: [ "displayName","emails"],
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const {  displayName, provider } = profile;

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
        name:displayName,
        provider_id: providerId,
      },
    });

    //4. Insert vào bảng users nếu chưa có hoặc lấy ra user nếu đã có
    if (!user) {
      user = await User.create({
        name: displayName,
        
        provider_id: providerId,
      });
    }

    //5. Return về hàm done với thông user lấy được để passport tự  động xử lý đăng nhập
    return done(null, user);
  }
);
