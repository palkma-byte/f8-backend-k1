// Xử lý đăng nhập qua mạng xã hội
const GoogleStrategy = require("passport-google-oidc");
const { Provider, User } = require("../models");

module.exports = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ["profile", "email"],
  },
  async (isuser, profile, done) => {
    // console.log(isuser);
    console.log(profile);
    const { displayName, emails } = profile;
    const [{ value: email }] = emails;
    console.log(displayName, email);
    // Xử lý tương tác database

    //1. Kiểm tra trong table providers có Provider hay chưa
    const provider = "google";
    const providerDetail = await Provider.findOne({
      where: { name: provider },
    });

    //2. Insert nếu không có hoặc lấy id nếu đã có
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;
    console.log(providerId);

    //3. Kiểm tra trong bảng users xem đã có user với provider_id chưa
    const user = await User.findOne({
      where: {
        email,
        provider_id: providerId,
      },
    });

    //4. Insert vào bảng users nếu chưa có hoặc lấy ra users nếu đã có
    if (!user) {
      user = await User.create({
        name: displayName,
        email,
        provider_id: providerId,
      });
    }

    console.log(user);

    //5. Return về hàm done với thông user lấy được đẻ passport tự động xử lý đăng nhập
    return done(null, profile);
  }
);
