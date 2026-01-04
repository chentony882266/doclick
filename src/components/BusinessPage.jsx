import React, { useState } from 'react';
import InfoModal from './InfoModal';
import PriceListModal from './PriceListModal';
import { PRICING_PLANS } from '../constants/data';

const BusinessPage = ({ onBack }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPriceListModalOpen, setIsPriceListModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen font-sans relative">
            <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <PriceListModal isOpen={isPriceListModalOpen} onClose={() => setIsPriceListModalOpen(false)} />

            {/* Biz Nav */}
            <nav className="sticky top-0 z-50 bg-biz-900 text-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={onBack}>
                        <div className="font-bold text-xl tracking-wider mr-2">愜易居</div>
                        <div className="text-xs bg-biz-700 px-2 py-1 rounded">Enterprise</div>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm">
                        <a href="#painpoints" className="hover:text-biz-300">為什麼選擇我們</a>
                        <a href="#solutions" className="hover:text-biz-300">核心服務</a>
                        <a href="#pricing" className="hover:text-biz-300">訂閱方案</a>
                    </div>
                    <button className="bg-white text-biz-900 px-4 py-2 rounded text-sm font-bold hover:bg-gray-100">
                        預約諮詢
                    </button>
                </div>
            </nav>

            {/* Biz Hero - Updated Background */}
            <header className="bg-biz-900 text-white py-24 relative overflow-hidden flex items-center min-h-[600px]">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                        alt="Happy employees working together"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-biz-900 via-biz-900/90 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl animate-fade-in">
                        <div className="text-biz-400 font-bold mb-3 tracking-widest uppercase flex items-center">
                            <span className="w-8 h-[2px] bg-biz-400 mr-2"></span>
                            Workforce OS
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            您買的不是人力，<br />是「管理好的產能」。
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                            台灣中小企業的第二個人資部。<br />
                            零風險・全彈性・訂閱制。讓您專注核心業務，繁瑣的勞務交給愜易居。
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsPriceListModalOpen(true)}
                                className="bg-biz-500 hover:bg-biz-400 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-biz-500/30 transition-all transform hover:-translate-y-1">
                                索取 2026 報價單
                            </button>
                            <button
                                onClick={() => window.location.href = '#painpoints'}
                                className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg transition-all"
                            >
                                了解運作模式
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Pain Points Comparison */}
            <section id="painpoints" className="py-20 bg-biz-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">傳統招聘模式 vs. 愜易居隨插即用模組化</h2>
                        <p className="text-gray-600 mt-6 text-xl">用真實的協作，取代履歷的片面之詞</p>
                    </div>

                    <div className="flex flex-col gap-12 max-w-6xl mx-auto mb-12">
                        {/* Traditional Recruiting Flow */}
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                            <h3 className="text-2xl font-bold text-center mb-8">傳統招募</h3>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                                {/* Steps */}
                                <div className="flex items-center">
                                    <div className="bg-white border-2 border-gray-600 text-gray-800 font-bold py-4 px-8 rounded-lg shadow-sm w-32 text-center text-lg">
                                        [履歷]
                                    </div>
                                    <i className="fas fa-arrow-right text-gray-400 text-xl mx-4"></i>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white border-2 border-gray-600 text-gray-800 font-bold py-4 px-8 rounded-lg shadow-sm w-32 text-center text-lg">
                                        [面試]
                                    </div>
                                    <i className="fas fa-arrow-right text-gray-400 text-xl mx-4"></i>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white border-2 border-gray-600 text-gray-800 font-bold py-4 px-8 rounded-lg shadow-sm w-32 text-center text-lg">
                                        [聘用]
                                    </div>
                                    <i className="fas fa-arrow-right text-gray-400 text-xl mx-4"></i>
                                </div>
                                <div>
                                    <div className="bg-white border-2 border-gray-600 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm w-32 text-center flex flex-col items-center justify-center">
                                        <div className="text-lg mb-1">[祈禱]</div>
                                        <i className="fas fa-praying-hands text-gray-600 text-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-gray-700 font-medium text-lg">
                                結果：高風險。你只認識「面試模式」下的他，聘用後才發現能力、文化完全不符。
                            </p>
                        </div>

                        {/* Qie Yi Ju Flow */}
                        <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-2xl font-bold text-center mb-8">愜易居『先試後聘』</h3>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                                {/* Steps */}
                                <div className="flex items-center">
                                    <div className="bg-[#0e7490] text-white font-bold py-6 px-4 rounded-lg shadow-md w-40 text-center text-xl">
                                        [派遣]
                                    </div>
                                    <i className="fas fa-arrow-right text-[#0e7490] text-xl mx-2 md:mx-4"></i>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#0891b2] text-white font-bold py-4 px-4 rounded-lg shadow-md w-40 text-center flex flex-col items-center justify-center h-24">
                                        <div className="text-lg leading-tight mb-1">[530+ 小時<br />真實任務]</div>
                                    </div>
                                    <i className="fas fa-arrow-right text-[#0891b2] text-xl mx-2 md:mx-4"></i>
                                </div>
                                <div className="flex items-center">
                                    <div className="relative bg-[#5eead4] text-[#134e4a] font-bold py-3 px-2 rounded-lg shadow-md w-44 text-center flex flex-col items-center justify-center h-24 border-2 border-[#14b8a6]">
                                        <i className="fas fa-check text-yellow-500 text-2xl absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-sm bg-white rounded-full p-1"></i>
                                        <div className="text-lg leading-tight mb-1 mt-2">[文化與能力驗證]</div>
                                        <i className="fas fa-check text-white text-sm"></i>
                                    </div>
                                    <i className="fas fa-arrow-right text-[#14b8a6] text-xl mx-2 md:mx-4"></i>
                                </div>
                                <div>
                                    <div className="bg-[#2dd4bf] text-white font-bold py-3 px-6 rounded-lg shadow-md w-32 text-center flex flex-col items-center justify-center h-24">
                                        <div className="text-xl mb-1">[轉正]</div>
                                        <i className="fas fa-trophy text-yellow-100 text-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-gray-800 font-bold text-lg">
                                結果：零風險。你聘用的是一位已被團隊驗證、無縫接軌的即戰力。
                            </p>
                        </div>
                    </div>

                    {/* Modal Trigger Button */}
                    <div className="text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center text-biz-600 font-bold hover:text-biz-800 transition-colors border-b-2 border-biz-200 hover:border-biz-600 pb-1"
                        >
                            <i className="fas fa-info-circle mr-2"></i>
                            深入了解愜易居的獨特價值
                        </button>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section id="solutions" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">全方位產能解決方案</h2>
                        <p className="text-gray-600 mt-4">不僅是基礎人力，更是您的專業後勤</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-biz-500">
                            <div className="text-biz-600 mb-4 text-3xl"><i className="fas fa-box-open"></i></div>
                            <h3 className="text-xl font-bold mb-3">彈性時數包</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                針對行政、包裝、理貨等標準化作業。透過點數系統，一鍵調度，解決訂單爆量時的人力缺口。
                            </p>
                            <span className="text-xs bg-biz-50 text-biz-700 px-2 py-1 rounded">1.0 點/hr</span>
                        </div>
                        <div className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-biz-500">
                            <div className="text-biz-600 mb-4 text-3xl"><i className="fas fa-laptop-code"></i></div>
                            <h3 className="text-xl font-bold mb-3">技術人才訂閱</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                設計雲 (Design Cloud) 與專業管家 (Fractional Pro)。讓您擁有美編吃到飽或每週駐點的資深財務/人資。
                            </p>
                            <span className="text-xs bg-biz-50 text-biz-700 px-2 py-1 rounded">專案扣點制</span>
                        </div>
                        <div className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-biz-500">
                            <div className="text-biz-600 mb-4 text-3xl"><i className="fas fa-utensils"></i></div>
                            <h3 className="text-xl font-bold mb-3">餐飲快閃支援</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                尖峰時刻的「雲端洗碗機」與外場支援。採用班次券制度，一口價含稅含加班費，成本完全可控。
                            </p>
                            <span className="text-xs bg-biz-50 text-biz-700 px-2 py-1 rounded">票券制</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 bg-biz-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">透明的點數訂閱制</h2>
                        <p className="text-biz-300 mt-4">加入會員，鎖定全年最低費率 (1點 = 1標準工時)</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                        {/* Non-Member */}
                        <div className="bg-biz-800 p-8 rounded-xl border border-biz-700 flex-1 opacity-75">
                            <h3 className="text-xl font-bold mb-2">零售散客</h3>
                            <div className="text-3xl font-bold mb-4">$360 <span className="text-sm font-normal text-gray-400">/ 點</span></div>
                            <p className="text-sm text-gray-400 mb-6">適合臨時性、一次性的極短期需求。</p>
                            <ul className="text-sm space-y-3 mb-8 text-gray-300">
                                <li><i className="fas fa-check mr-2"></i> 無月費</li>
                                <li><i className="fas fa-times mr-2"></i> 無優先權</li>
                                <li><i className="fas fa-times mr-2"></i> 不適用技術人才</li>
                            </ul>
                        </div>

                        {PRICING_PLANS.map((plan, idx) => (
                            <div key={idx} className={`bg-white text-gray-900 p-8 rounded-xl flex-1 relative ${plan.isPopular ? 'transform md:-translate-y-4 shadow-2xl border-4 border-biz-500' : ''}`}>
                                {plan.isPopular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-biz-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
                                <h3 className="text-xl font-bold mb-2 text-biz-900">{plan.name}</h3>
                                <div className="flex items-baseline mb-1">
                                    <span className="text-4xl font-bold">{plan.monthlyFee}</span>
                                    <span className="text-sm text-gray-500 ml-2">/ 月</span>
                                </div>
                                <div className="text-biz-600 font-bold mb-4 text-sm bg-biz-50 inline-block px-2 py-1 rounded">費率：{plan.hourlyRate}</div>
                                <p className="text-xs text-gray-500 mb-6 border-b pb-4">{plan.target}</p>

                                <ul className="text-sm space-y-3 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> {feat}</li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.isPopular ? 'bg-biz-600 text-white hover:bg-biz-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                                    選擇方案
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Footnote */}
            <div className="bg-gray-50 py-8 border-t border-gray-200">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <span><i className="fas fa-shield-alt mr-1"></i> 100% 合規申報</span>
                        <span><i className="fas fa-file-invoice-dollar mr-1"></i> 實開統一發票</span>
                    </div>
                    <div>
                        &copy; 2026 Dian Zi Xiang Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;
