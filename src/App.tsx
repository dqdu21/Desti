import "./App.css";

function App() {
  const featuredProducts = [
    {
      id: 1,
      name: "Custom Sticker",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355838658602733649/713BCE70-A915-4B53-8970-2325E10962B3.png?ex=67ea62a6&is=67e91126&hm=a9cf7c8434f8e99238a01453743459280682ca5615b6461a89e0ad9008ef0406&=&format=webp&quality=lossless&width=328&height=425",
      detail: "Bạn sẽ thấy sao nếu được tự tay thiết kế một sản phẩm dành riêng cho bản thân và bạn bè? Hãy nhanh tay đến với chúng tôi để có thêm những sản phẩm độc đáo cho riêng mình nhé!",
    },
    {
      id: 2,
      name: "Capybara",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355839776875352144/9393DE4C-7BB9-4DBA-BE33-9B68A2DA724A.png?ex=67ea63b1&is=67e91231&hm=df671b4f1e3301adc187575d828c911af770d01a353a2ec8624de3f5da0b6108&=&format=webp&quality=lossless&width=779&height=774",
      detail: "Đại sứ ngoại giao tới chơiiii. Chào đón ngày mới bằng những chú capybara siêu đáng yêu của chúng tôi, hãy chọn ngay vào giỏ hàng và nhận lấy những anh chàng ngoại giao đáng yêu này thôi nào.",
    },
    {
      id: 3,
      name: "Egg Egg Egg",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355840486723551232/34A8D936-6C2B-4C0D-9D49-761CD3212E2E.png?ex=67ea645a&is=67e912da&hm=a83958412e2b147a267d5d324c2dd12fb3e9a7eff5d54e0f3b209370a648511d&=&format=webp&quality=lossless&width=781&height=775",
      detail: "Trứng? Trứng cũng làm sticker được sao? Tại sao không nhỉ? Đến với desti, nơi sẽ biến mọi ý tưởng của bạn thành những chiếc sticker xinh xẻo.",
    },
  ];

  const allProducts = [
    {
      id: 1,
      name: "Xoài đê",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355845136827027577/651C4BD7-E3FD-4A91-8280-AAF5F2E09009.png?ex=67ea68af&is=67e9172f&hm=16ca53c852c3aed42b96ab39827c30d9468c9c845cc02505683b0d35c4494ed2&=&format=webp&quality=lossless&width=599&height=780",
      detail: "Xoài khum bạn?",
    },
    {
      id: 2,
      name: "Rubik cube",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355845209761779823/E9E11D2F-A4DC-44A0-A7B6-524730C87B67.png?ex=67ea68c0&is=67e91740&hm=494374cf77c7017f5e72659a1ee94a627483afaefe552c70590d3c0d9444613a&=&format=webp&quality=lossless&width=776&height=770",
      detail: "Rubik thì sao?",
    },
    {
      id: 3,
      name: "Doggo",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355845293865828472/7AA47EE6-9963-4208-889F-EAF38C8F0119.png?ex=67ea68d4&is=67e91754&hm=7f35e5d9fed6f7bc5435891d1d526805fdb5734b07a29c396af6415567363696&=&format=webp&quality=lossless&width=775&height=765",
      detail: "Làm gì có ai nỡ bỏ qua chú chó cute như này chứ nhỉ?",
    },
    {
      id: 4,
      name: "Trendy Sticker",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355843642371080242/0ED2BCBC-B2B1-40B5-97AE-4BBA0CE92215.png?ex=67ea674a&is=67e915ca&hm=657254cd0140b56e355fb0d62f60927e81e28885e21d4d38bbc7a58d16ccd6b4&=&format=webp&quality=lossless&width=1160&height=650",
      detail: "Ở đây không có trend gì mà chúng tôi không biết.",
    },
    {
      id: 5,
      name: "Desti sticker",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355844030159655065/76B85B3E-5082-409A-8BCC-CEF590B4E985.png?ex=67ea67a7&is=67e91627&hm=b2b9872a937b2da9113c74a88544127be6d76cf46f7f2e3bddfe373d713f808c&=&format=webp&quality=lossless&width=565&height=780",
      detail: "Các mẫu sticker cơ bản của Desti",
    },
    {
      id: 6,
      name: "Random Typo",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355844358586241085/A73EC177-7F42-4F9C-B691-6EF400893778.png?ex=67ea67f5&is=67e91675&hm=daa67dbd26706b528561fb6cf5c136bdfd12f9c5c9696a705a185698279dac4d&=&format=webp&quality=lossless&width=390&height=438",
      detail: "Typo cũng làm được sticker chứ nhỉ?",
    },
    {
      id: 7,
      name: "Random Typo 2",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355844891531542750/8C5FE275-2382-47E7-9F79-8DF7AB1D7CB9.png?ex=67ea6874&is=67e916f4&hm=c2737e188a080d2e86574c8a3a0f28fbef6234e8deb2d0cef8737dc9f61f8276&=&format=webp&quality=lossless&width=753&height=714",
      detail: "Typo cũng làm được sticker chứ nhỉ?",
    },
    {
      id: 8,
      name: "Random Typo 3",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355844978089136189/2A66AEA1-32C8-4A5A-BA04-298DC1786CBD.png?ex=67ea6889&is=67e91709&hm=1274039dc5975057cb84f894de6a1e484408a64bf370b0dbbb9536c476572135&=&format=webp&quality=lossless&width=1034&height=650",
      detail: "Typo cũng làm được sticker chứ nhỉ?",
    },
    {
      id: 9,
      name: "Random Typo 4 ",
      image: "https://media.discordapp.net/attachments/739929914609762425/1355845059186131014/E4773655-4587-490E-8354-5DF78B498F10.png?ex=67ea689c&is=67e9171c&hm=5167294c1b4bb1f87f2826c0392c5457d4dbde87112627ec17f0b000e37fb526&=&format=webp&quality=lossless&width=763&height=760",
      detail: "Typo cũng làm được sticker chứ nhỉ?",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Đinh Quang Dự",
      comment: "Sản phẩm chất lượng tốt, giao hàng nhanh, sẽ ủng hộ shop dài dài!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Tạ Quốc Việt",
      comment: "Rất hài lòng với sản phẩm, đóng gói cẩn thận, giá cả hợp lý.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Đinh Lê Phương Hân",
      comment: "Sản phẩm đúng như mô tả, chất lượng ổn định, nhân viên tư vấn nhiệt tình.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Desti Shop</h1>
          <nav className="main-nav">
            <a href="#featured">Sản phẩm nổi bật</a>
            <a href="#products">Tất cả sản phẩm</a>
            <a href="#reviews">Đánh giá</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <div className="container">
            <h2>Chào mừng đến với Desti Shop</h2>
            <p>Những sản phẩm chất lượng với giá cả hợp lý</p>
          </div>
        </div>
        <img src="https://media.discordapp.net/attachments/739929914609762425/1343425840318517358/banner.jpg?ex=67ea0d4f&is=67e8bbcf&hm=4c71068c8665b012ad6a9e5c62d35245dcb6dea38b8e5e6fbfe90b415a346ae7&=&format=webp&width=1510&height=575" alt="Banner" />
      </section>

      {/* Featured Products */}
      <section id="featured" className="featured">
        <div className="container">
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          <div className="featured-list">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`featured-item ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                <div className="featured-text">
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <button className="btn-primary">Xem chi tiết</button>
                </div>
                <div className="featured-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="products" className="all-products">
        <div className="container">
          <h2 className="section-title">Danh sách sản phẩm</h2>
          <div className="product-list">
            {allProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.detail}</p>
                  <button className="btn-secondary">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <h2 className="section-title">Đánh giá của khách hàng</h2>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div>
                    <h3>{review.name}</h3>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? "star-filled" : "star-empty"}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-comment">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Desti Sticker. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61572568936677">Facebook</a>
            <a href="https://www.instagram.com/desti_sticker/">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;