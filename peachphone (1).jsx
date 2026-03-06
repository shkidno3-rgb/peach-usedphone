import React, { useState, useEffect } from 'react';
import { Search, Heart, MessageSquare, Share2, Phone, Plus, X, TrendingUp } from 'lucide-react';

// 복숭아 캐릭터 컴포넌트
const PeachCharacter = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-transform duration-500 ${bounce ? 'translate-y-2' : 'translate-y-0'}`}>
      <div className="relative w-24 h-24 mx-auto mb-4">
        {/* 복숭아 몸체 */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-orange-300 to-orange-400 rounded-full shadow-lg flex items-center justify-center">
          {/* 복숭아 윗부분 */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-green-500 rounded-full border-2 border-green-600"></div>
          
          {/* 왼쪽 눈 */}
          <div className="absolute top-8 left-6 w-3 h-3 bg-black rounded-full"></div>
          {/* 왼쪽 눈 하이라이트 */}
          <div className="absolute top-8 left-6.5 w-1.5 h-1.5 bg-white rounded-full"></div>

          {/* 오른쪽 눈 */}
          <div className="absolute top-8 right-6 w-3 h-3 bg-black rounded-full"></div>
          {/* 오른쪽 눈 하이라이트 */}
          <div className="absolute top-8 right-6.5 w-1.5 h-1.5 bg-white rounded-full"></div>

          {/* 입 */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 border-2 border-black rounded-b-full"></div>

          {/* 볼 홍조 */}
          <div className="absolute top-10 left-1 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
          <div className="absolute top-10 right-1 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>

          {/* 팔 - 왼쪽 */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-3 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full"></div>
          {/* 팔 - 오른쪽 */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-3 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full"></div>

          {/* 다리 - 왼쪽 */}
          <div className="absolute bottom-0 left-5 w-3 h-4 bg-orange-400 rounded-b-full"></div>
          {/* 다리 - 오른쪽 */}
          <div className="absolute bottom-0 right-5 w-3 h-4 bg-orange-400 rounded-b-full"></div>
        </div>
      </div>
    </div>
  );
};

export default function PeachPhone() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [realtimePrice, setRealtimePrice] = useState({});
  const [reviews, setReviews] = useState([
    {
      id: 1,
      type: '구매',
      phone: 'iPhone 13 Pro',
      rating: 5,
      author: '김민지',
      date: '2024.03.05',
      content: '상태가 완벽합니다! 배송도 빨랐어요.',
      likes: 24
    },
    {
      id: 2,
      type: '판매',
      phone: 'Galaxy S21',
      rating: 4,
      author: '박준호',
      date: '2024.03.03',
      content: '빠르게 판매되었고 거래 과정이 매끄러웠습니다.',
      likes: 18
    },
    {
      id: 3,
      type: '구매',
      phone: 'iPhone 12',
      rating: 5,
      author: '이수연',
      date: '2024.03.01',
      content: '완벽한 상태! 매우 만족합니다!',
      likes: 31
    }
  ]);
  const [newReview, setNewReview] = useState({
    type: 'purchase',
    phone: '',
    rating: 5,
    content: ''
  });

  // 휴대폰 데이터
  const phones = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      year: 2022,
      image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone14_pro_hero_220908.jpg',
      grades: [
        { grade: 'S급', price: 700000, range: '680,000 ~ 720,000' },
        { grade: 'A급', price: 650000, range: '620,000 ~ 680,000' },
        { grade: 'B급', price: 600000, range: '570,000 ~ 630,000' },
        { grade: 'C급', price: 540000, range: '500,000 ~ 580,000' }
      ],
      trend: '+2.3%',
      listings: 89,
      sales: 156,
      purchases: 142
    },
    {
      id: 2,
      name: 'iPhone 13 Pro',
      year: 2021,
      image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone13-pro_hero_09142021.jpg',
      grades: [
        { grade: 'S급', price: 580000, range: '560,000 ~ 600,000' },
        { grade: 'A급', price: 540000, range: '520,000 ~ 560,000' },
        { grade: 'B급', price: 500000, range: '480,000 ~ 520,000' },
        { grade: 'C급', price: 450000, range: '420,000 ~ 480,000' }
      ],
      trend: '+1.8%',
      listings: 156,
      sales: 289,
      purchases: 267
    },
    {
      id: 3,
      name: 'iPhone 12',
      year: 2020,
      image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12_hero_10132020.jpg',
      grades: [
        { grade: 'S급', price: 440000, range: '420,000 ~ 460,000' },
        { grade: 'A급', price: 410000, range: '390,000 ~ 430,000' },
        { grade: 'B급', price: 380000, range: '360,000 ~ 400,000' },
        { grade: 'C급', price: 330000, range: '300,000 ~ 360,000' }
      ],
      trend: '-0.5%',
      listings: 201,
      sales: 378,
      purchases: 401
    },
    {
      id: 4,
      name: 'Galaxy S23 Ultra',
      year: 2023,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/ae_en/sm-s911b/gallery/ae-en-galaxy-s23-ultra-s911-410854-sm-s911bdaeaae-front-black-408636.jpg',
      grades: [
        { grade: 'S급', price: 750000, range: '720,000 ~ 780,000' },
        { grade: 'A급', price: 700000, range: '680,000 ~ 720,000' },
        { grade: 'B급', price: 650000, range: '630,000 ~ 680,000' },
        { grade: 'C급', price: 580000, range: '550,000 ~ 620,000' }
      ],
      trend: '+2.1%',
      listings: 67,
      sales: 134,
      purchases: 128
    },
    {
      id: 5,
      name: 'Galaxy S22',
      year: 2022,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/sg_en/sm-s901b/gallery/sg-en-galaxy-s22-s901-sm-s901bzgaxsp-front-phantom-white-236715-sm-s901bzgaxsp-527640450.jpg',
      grades: [
        { grade: 'S급', price: 480000, range: '460,000 ~ 500,000' },
        { grade: 'A급', price: 450000, range: '430,000 ~ 470,000' },
        { grade: 'B급', price: 410000, range: '390,000 ~ 430,000' },
        { grade: 'C급', price: 360000, range: '330,000 ~ 390,000' }
      ],
      trend: '+0.9%',
      listings: 123,
      sales: 234,
      purchases: 198
    },
    {
      id: 6,
      name: 'Galaxy A53',
      year: 2022,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/ae_en/sm-a535f/gallery/ae-en-galaxy-a53-5g-sm-a535f-front-awesome-white-363715-sm-a535fzwaxme-527640533.jpg',
      grades: [
        { grade: 'S급', price: 310000, range: '290,000 ~ 330,000' },
        { grade: 'A급', price: 280000, range: '260,000 ~ 300,000' },
        { grade: 'B급', price: 250000, range: '230,000 ~ 270,000' },
        { grade: 'C급', price: 210000, range: '190,000 ~ 240,000' }
      ],
      trend: '+1.2%',
      listings: 87,
      sales: 167,
      purchases: 145
    }
  ];

  // 방문자 통계
  const visitorStats = {
    today: 3847,
    thisWeek: 24568,
    thisMonth: 98234,
    trend: '+12.3%'
  };

  // 실시간 가격 변동
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimePrice(prev => {
        const newData = {};
        phones.forEach(phone => {
          const variation = (Math.random() - 0.5) * 20000;
          newData[phone.id] = (prev[phone.id] || 0) + variation;
        });
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddReview = () => {
    if (newReview.phone && newReview.content.trim()) {
      const review = {
        id: reviews.length + 1,
        type: newReview.type === 'purchase' ? '구매' : '판매',
        phone: newReview.phone,
        rating: newReview.rating,
        author: '익명의 사용자',
        date: new Date().toLocaleDateString('ko-KR'),
        content: newReview.content,
        likes: 0
      };
      setReviews([review, ...reviews]);
      setNewReview({ type: 'purchase', phone: '', rating: 5, content: '' });
      setShowReviewForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-rose-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <PeachCharacter />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  피치중고폰
                </h1>
                <p className="text-sm text-slate-600">중고폰 거래의 신뢰할 수 있는 가이드</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 border border-emerald-300 rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700">오늘 방문자: {visitorStats.today.toLocaleString()}명</span>
            </div>
          </div>

          {/* 탭 */}
          <div className="flex gap-4 border-t border-rose-200 pt-3">
            <button
              onClick={() => setActiveTab('search')}
              className={`px-4 py-2 font-semibold transition-all ${activeTab === 'search' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-slate-600'}`}
            >
              🔍 시세검색
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 font-semibold transition-all ${activeTab === 'reviews' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-slate-600'}`}
            >
              ⭐ 후기
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 font-semibold transition-all ${activeTab === 'trending' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-slate-600'}`}
            >
              📈 트렌드
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* 시세검색 탭 */}
        {activeTab === 'search' && (
          <div className="space-y-8">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-rose-400" />
              <input
                type="text"
                placeholder="휴대폰 모델 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-rose-200 focus:border-rose-500 focus:outline-none shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhones.map(phone => (
                <div
                  key={phone.id}
                  onClick={() => setSelectedPhone(phone)}
                  className="bg-white rounded-xl p-6 border border-rose-200 hover:border-rose-400 hover:shadow-lg cursor-pointer transition-all overflow-hidden"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-orange-100 to-rose-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={phone.image} 
                      alt={phone.name}
                      className="h-full w-full object-contain p-2"
                      onError={(e) => {
                        e.target.src = '📱';
                        e.target.style.fontSize = '3rem';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{phone.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{phone.year}년 출시 · 거래량 {phone.listings}건</p>
                  
                  <div className="space-y-2 mb-4 border-t border-rose-200 pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">S급</span>
                      <span className="text-rose-600 font-bold">₩{(phone.grades[0].price / 10000).toFixed(0)}만</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">A급</span>
                      <span className="text-rose-600 font-bold">₩{(phone.grades[1].price / 10000).toFixed(0)}만</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">B급</span>
                      <span className="text-rose-600 font-bold">₩{(phone.grades[2].price / 10000).toFixed(0)}만</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">C급</span>
                      <span className="text-rose-600 font-bold">₩{(phone.grades[3].price / 10000).toFixed(0)}만</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-rose-200">
                    <span className={`text-sm font-bold ${phone.trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                      {phone.trend}
                    </span>
                    <button className="bg-gradient-to-r from-rose-400 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-rose-500 hover:to-orange-600 transition-all">
                      상세보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 후기 탭 */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🍑</div>
                <h2 className="text-3xl font-bold text-slate-900">구매/판매 후기</h2>
              </div>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-gradient-to-r from-rose-400 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-rose-500 hover:to-orange-600 transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                후기 작성
              </button>
            </div>

            {showReviewForm && (
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-slate-900">새로운 후기 작성</h3>
                  <button onClick={() => setShowReviewForm(false)} className="text-slate-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">거래 유형</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="purchase"
                          checked={newReview.type === 'purchase'}
                          onChange={(e) => setNewReview({...newReview, type: e.target.value})}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700">구매</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="sale"
                          checked={newReview.type === 'sale'}
                          onChange={(e) => setNewReview({...newReview, type: e.target.value})}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700">판매</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">휴대폰 모델</label>
                    <select
                      value={newReview.phone}
                      onChange={(e) => setNewReview({...newReview, phone: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-rose-200 focus:border-rose-500 focus:outline-none"
                    >
                      <option value="">선택하세요</option>
                      {phones.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">평점</label>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map(i => (
                        <button
                          key={i}
                          onClick={() => setNewReview({...newReview, rating: i})}
                          className={`text-2xl ${i <= newReview.rating ? 'text-amber-400' : 'text-slate-400'}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">후기 내용</label>
                    <textarea
                      value={newReview.content}
                      onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                      placeholder="거래 경험을 작성해주세요..."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-rose-200 focus:border-rose-500 focus:outline-none h-32 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleAddReview}
                    className="w-full bg-gradient-to-r from-rose-400 to-orange-500 text-white py-2 rounded-lg font-semibold hover:from-rose-500 hover:to-orange-600 transition-all"
                  >
                    후기 등록
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="bg-white rounded-xl p-6 border border-rose-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${review.type === '구매' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {review.type}
                      </span>
                      <h4 className="font-bold text-lg text-rose-600 mt-2">{review.phone}</h4>
                      <p className="text-sm text-slate-600">{review.author} · {review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className={i <= review.rating ? 'text-amber-400 text-lg' : 'text-slate-300 text-lg'}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{review.content}</p>
                  <div className="flex gap-4 text-sm text-slate-600">
                    <button className="flex items-center gap-1 hover:text-rose-500 transition-all">
                      <Heart className="w-4 h-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-rose-500 transition-all">
                      <MessageSquare className="w-4 h-4" />
                      <span>댓글</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-rose-500 transition-all ml-auto">
                      <Share2 className="w-4 h-4" />
                      <span>공유</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 트렌드 탭 */}
        {activeTab === 'trending' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">시장 트렌드</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl p-4 border border-emerald-300">
                <p className="text-sm text-slate-600">오늘 방문자</p>
                <p className="text-3xl font-bold text-emerald-700">{visitorStats.today.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4 border border-blue-300">
                <p className="text-sm text-slate-600">이번주 방문자</p>
                <p className="text-3xl font-bold text-blue-700">{visitorStats.thisWeek.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 border border-purple-300">
                <p className="text-sm text-slate-600">이번달 방문자</p>
                <p className="text-3xl font-bold text-purple-700">{visitorStats.thisMonth.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-4 border border-pink-300">
                <p className="text-sm text-slate-600">증가율</p>
                <p className="text-3xl font-bold text-pink-700">{visitorStats.trend}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 가격 상승 모델 */}
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-rose-500" />
                  가격 상승
                </h3>
                <div className="space-y-3">
                  {phones.filter(p => parseFloat(p.trend) > 0).map(phone => (
                    <div key={phone.id} className="flex justify-between items-center p-2 bg-rose-50 rounded-lg">
                      <span className="font-semibold text-slate-900 text-sm">{phone.name}</span>
                      <span className="text-emerald-600 font-bold text-sm">{phone.trend}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 인기 모델 (거래량) */}
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">🔥 인기 모델</h3>
                <div className="space-y-3">
                  {phones.sort((a, b) => b.listings - a.listings).map((phone, idx) => (
                    <div key={phone.id} className="flex items-center justify-between p-2 bg-rose-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-orange-500 w-5">#{idx + 1}</span>
                        <span className="font-semibold text-slate-900 text-sm">{phone.name}</span>
                      </div>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">{phone.listings}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 판매량 순위 */}
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📤 판매량 순위</h3>
                <div className="space-y-2">
                  {phones.sort((a, b) => b.sales - a.sales).map((phone, idx) => {
                    const percentage = (phone.sales / Math.max(...phones.map(p => p.sales))) * 100;
                    return (
                      <div key={phone.id} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-slate-900">
                            <span className={`inline-block w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center mr-2 ${
                              idx === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                              idx === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                              idx === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                              'bg-gradient-to-r from-slate-400 to-slate-500'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="text-xs">{phone.name}</span>
                          </span>
                          <span className="font-bold text-rose-600 text-xs">{phone.sales}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              idx === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                              idx === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                              idx === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                              'bg-gradient-to-r from-slate-400 to-slate-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 구매량 순위 */}
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📥 구매량 순위</h3>
                <div className="space-y-2">
                  {phones.sort((a, b) => b.purchases - a.purchases).map((phone, idx) => {
                    const percentage = (phone.purchases / Math.max(...phones.map(p => p.purchases))) * 100;
                    return (
                      <div key={phone.id} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-slate-900">
                            <span className={`inline-block w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center mr-2 ${
                              idx === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                              idx === 1 ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                              idx === 2 ? 'bg-gradient-to-r from-sky-400 to-sky-500' :
                              'bg-gradient-to-r from-slate-400 to-slate-500'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="text-xs">{phone.name}</span>
                          </span>
                          <span className="font-bold text-blue-600 text-xs">{phone.purchases}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              idx === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                              idx === 1 ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                              idx === 2 ? 'bg-gradient-to-r from-sky-400 to-sky-500' :
                              'bg-gradient-to-r from-slate-400 to-slate-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 상세 모달 */}
      {selectedPhone && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhone(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-slate-900">{selectedPhone.name}</h2>
              <button 
                onClick={() => setSelectedPhone(null)} 
                className="text-slate-500 hover:text-slate-700 text-3xl font-bold hover:bg-slate-100 rounded-lg p-2 transition-all"
                title="뒤로가기"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-rose-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={selectedPhone.image} 
                alt={selectedPhone.name}
                className="h-full w-full object-contain p-4"
                onError={(e) => {
                  e.target.src = '📱';
                  e.target.style.fontSize = '6rem';
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <p className="text-sm text-slate-600">출시 년도</p>
                <p className="text-2xl font-bold text-slate-900">{selectedPhone.year}년</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <p className="text-sm text-slate-600">거래량</p>
                <p className="text-2xl font-bold text-slate-900">{selectedPhone.listings}건</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">💹 실시간 시세</h3>
            <div className="space-y-3 mb-6">
              {selectedPhone.grades.map((grade, idx) => {
                const realPrice = grade.price + (realtimePrice[selectedPhone.id] || 0);
                return (
                  <div key={idx} className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg p-4 border border-rose-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-lg text-slate-900">{grade.grade}</p>
                        <p className="text-sm text-slate-600">예상 범위: {grade.range}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-rose-600">₩{(realPrice / 10000).toFixed(0)}만</p>
                        <p className="text-xs text-slate-500">기본가: ₩{(grade.price / 10000).toFixed(0)}만</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => setSelectedPhone(null)} 
              className="w-full bg-gradient-to-r from-rose-400 to-orange-500 text-white py-3 rounded-lg font-bold hover:from-rose-500 hover:to-orange-600 transition-all"
            >
              ← 뒤로가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
