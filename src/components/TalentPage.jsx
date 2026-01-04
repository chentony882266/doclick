import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TALENT_LEVELS } from '../constants/data';

const TalentPage = ({ onBack }) => {
    return (
        <div className="bg-talent-50 min-h-screen font-sans">
            {/* Talent Nav */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={onBack}>
                        <div className="font-bold text-xl tracking-wider mr-2 text-talent-900">愜易居</div>
                        <div className="text-xs bg-talent-100 text-talent-800 px-2 py-1 rounded">Career</div>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm text-gray-600 items-center">
                        <Link to="/jobs" className="hover:text-talent-600 font-bold">找工作</Link>
                        <a href="#vision" className="hover:text-talent-600">願景</a>
                        <a href="#levels" className="hover:text-talent-600">分級制度</a>
                        <a href="#benefits" className="hover:text-talent-600">地圖卡福利</a>
                    </div>
                    <Link to="/register" className="bg-talent-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-talent-700 shadow-md shadow-talent-500/30">
                        立即加入
                    </Link>
                </div>
            </nav>

            {/* Talent Hero */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-talent-100 to-white z-0"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <span className="text-talent-600 font-bold tracking-widest uppercase text-sm bg-white px-3 py-1 rounded-full shadow-sm mb-6 inline-block">The Legend Map</span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                            別讓工作綁住你，<br />
                            讓工作<span className="text-talent-600">配合你</span>。
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                            全台首創「職涯地圖卡」制度。在這裡，我們不只發薪水，更投資你的未來。從行政到技術，從兼職到專業管家。
                        </p>
                        <div className="flex gap-4">
                            <Link to="/register" className="bg-talent-600 hover:bg-talent-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-talent-600/20 transition-all transform hover:-translate-y-1 inline-block text-center">
                                啟動職涯地圖
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        {/* Visual representation of a map/card */}
                        <div className="bg-white p-6 rounded-2xl shadow-2xl rotate-3 border-4 border-white max-w-sm mx-auto relative z-10">
                            <div className="bg-gradient-to-br from-talent-500 to-talent-600 h-40 rounded-xl mb-4 flex items-center justify-center text-white relative overflow-hidden">
                                <i className="fas fa-crown text-6xl opacity-20 absolute -bottom-4 -right-4"></i>
                                <div className="text-center">
                                    <div className="text-sm opacity-80 uppercase tracking-widest">Level 5</div>
                                    <div className="text-3xl font-bold">職人傳奇</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                                    <div className="h-full bg-talent-500 w-3/4"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 font-medium">
                                    <span>XP: 1500 hrs</span>
                                    <span>Next: Partner</span>
                                </div>
                                <div className="pt-4 grid grid-cols-3 gap-2 text-center text-xs text-gray-600">
                                    <div className="bg-gray-50 p-2 rounded"><i className="fas fa-home text-talent-500 mb-1 block"></i>購屋補貼</div>
                                    <div className="bg-gray-50 p-2 rounded"><i className="fas fa-graduation-cap text-talent-500 mb-1 block"></i>進修金</div>
                                    <div className="bg-gray-50 p-2 rounded"><i className="fas fa-baby text-talent-500 mb-1 block"></i>子女補助</div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 left-20 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </header>

            {/* Levels */}
            <section id="levels" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">分級錄用．遊戲化晉升</h2>
                        <p className="text-gray-500 mt-4">你的每一小時付出，都在累積未來的籌碼</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {TALENT_LEVELS.map((level, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-talent-300 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-talent-600 font-bold text-sm tracking-wide uppercase mb-1">{level.level}</h3>
                                        <h4 className="text-2xl font-bold text-gray-900">{level.title}</h4>
                                    </div>
                                    <div className="bg-talent-50 text-talent-800 font-bold px-3 py-1 rounded text-sm">
                                        {level.pay}
                                    </div>
                                </div>
                                <div className="mb-6 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg inline-block">
                                    <i className="fas fa-exclamation-circle mr-2"></i> {level.req}
                                </div>
                                <ul className="space-y-3">
                                    {level.benefits.map((b, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <i className="fas fa-star text-yellow-400 mr-3"></i> {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                    <span className="text-xs text-gray-400">
                                        {idx === 0 ? "由此開始你的旅程" : "解鎖更多高階權限"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-xs text-red-500 bg-red-50 inline-block px-4 py-2 rounded-full">
                            <i className="fas fa-ban mr-2"></i> 錄用紅線：月可排班小於 35 小時者，恕不錄用
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section id="benefits" className="py-20 bg-talent-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold mb-6">不只是打工<br />是你的生涯加速器</h2>
                            <p className="text-talent-200 mb-8 leading-relaxed">
                                我們知道你有夢想，可能想當設計師、想開咖啡廳、或正在準備國考。愜易居提供的不只是薪水，而是支持你追夢的資源。
                            </p>
                            <button className="text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-talent-900 transition-colors">
                                查看完整福利手冊
                            </button>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <i className="fas fa-chart-line text-3xl text-talent-400 mb-4"></i>
                                <h3 className="font-bold text-lg mb-2">快速加薪機制</h3>
                                <p className="text-sm text-gray-300">每累積 175 小時工時，即啟動調薪評估。你的努力，系統都看得到。</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <i className="fas fa-tools text-3xl text-talent-400 mb-4"></i>
                                <h3 className="font-bold text-lg mb-2">生產力工具買單</h3>
                                <p className="text-sm text-gray-300">達標者由公司補助 Adobe Creative Cloud、ChatGPT Plus 等專業工具訂閱費。</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <i className="fas fa-home text-3xl text-talent-400 mb-4"></i>
                                <h3 className="font-bold text-lg mb-2">安家計畫</h3>
                                <p className="text-sm text-gray-300">傳奇等級享購屋補貼資格、子女學費補助與父母健檢津貼。</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <i className="fas fa-shield-alt text-3xl text-talent-400 mb-4"></i>
                                <h3 className="font-bold text-lg mb-2">100% 法規保障</h3>
                                <p className="text-sm text-gray-300">我們最基本的堅持。勞保、健保、勞退6% 絕對足額提撥，不玩文字遊戲。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TalentPage;
