import React, { useState } from 'react';

const SERVICE_SPECS = [
    {
        id: 'accounting',
        title: '會計作業',
        icon: 'fa-calculator',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        items: [
            { title: '憑證處理', desc: '收集、分類與黏貼日常發票、收據與報銷單據。' },
            { title: '基礎內帳', desc: '將每日收支登錄至Excel或客戶指定的雲端會計系統。' },
            { title: '開立發票', desc: '協助開立二聯/三聯式發票、收據，並進行作廢或折讓單處理。' },
            { title: '應收付帳款管理', desc: '製作對帳單，提醒客戶廠商付款日期或客戶收款日期。' },
            { title: '零用金管理', desc: '管理小額零用金（建議額度NT$10,000以下），並製作零用金撥補表。(若客戶有要求，不主動請求執行此項目)' },
            { title: '薪資計算', desc: '計算員工薪資、勞健保級距與二代健保補充保費。(若客戶有要求，不主動請求執行此項目)' },
            { title: '銀行往來任務 (不持有印鑑)', desc: '協助至銀行進行臨櫃存款、匯款單填寫、需確實與業主核對。' },
            { title: '財務報表編製 (技術型會計)', desc: '產出資產負債表、損益表、現金流量表、財務規劃等。' },
            { title: '稅務申報 (技術型會計)', desc: '協助計算營業稅 (401/403報表)、各類所得扣繳申報資料整理（需配合客戶端簽約的會計師事務所）。' },
            { title: '成本分析 (技術型會計)', desc: '針對新創產品進行簡易的成本結構分析與毛利計算。' },
            { title: '請款流制度建立 (技術型會計)', desc: '協助新創公司建立請款流程、核決權限表等基礎內控規章。' },
        ]
    },
    {
        id: 'admin',
        title: '行政作業',
        icon: 'fa-folder-open',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        items: [
            { title: '信件收發', desc: '快遞與包裹的簽收、登記、分發，以及寄件聯繫。' },
            { title: '資料建檔', desc: '將紙本合約、名片、客戶資料掃描並歸檔至雲端。' },
            { title: '會議記錄', desc: '參與內部會議，協助製作簡易會議記錄與待辦事項追蹤。' },
            { title: '表單製作', desc: '協助製作或調整基礎 Word/Excel 表單（如：請假單、簽到表等）。' },
            { title: '排程管理', desc: '協助安排會議室預約、確認與會者時間（但不負責老闆私人行程）。' },
            { title: '環境維護', desc: '負責「辦公環境」的整潔維持（如：會議室桌椅歸位、公共區域整理、垃圾分類），但不包含專業清潔打掃。' },
            { title: '辦公室用品採購與盤點', desc: '定期盤點文具、衛生紙、茶水間耗材，並製作請購單。' },
            { title: '設備報修', desc: '印表機、網路、冷氣等設備故障時的廠商聯繫窗口。' },
            { title: '出勤協作', desc: '協助匯出打卡紀錄，製作初步的出勤統計表供會計算薪。' },
        ]
    },
    {
        id: 'cs',
        title: '客服總機',
        icon: 'fa-headset',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        items: [
            { title: '來電過濾', desc: '辨識並過濾推銷、詐騙或無效來電，僅將重要合作夥伴或緊急事項轉接給核心團隊。' },
            { title: '標準應答', desc: '依照客戶制定的回答基礎問題（如：營業時間、公司地址、發票抬頭、基本產品規格）。' },
            { title: '留言管理', desc: '若核心團隊忙碌，負責精準記錄來電者資訊（姓名、單位、事由、回電時間）並透過通訊軟體回報。' },
            { title: '訊息回覆', desc: '管理官方 Line@、FB Messenger 或 Email 的「一般收件匣」。回覆常見問題，如出貨進度查詢、退換貨流程說明。' },
            { title: '客戶初級安撫', desc: '遇到憤怒客戶時，執行「聆聽、道歉、記錄」的標準程序，並將案件整理摘要回報給內部主管，不負責最終解決方案。' },
            { title: '訪客迎賓', desc: '針對有實體辦公室的新創，負責門禁管理、訪客換證、茶水招待及會議室指引。' },
            { title: '快遞與外送分流處理', desc: '統一收發信件包裹，避免快遞員直接闖入辦公區打擾團隊工作。' },
        ]
    },
    {
        id: 'sales_assistant',
        title: '業務助理',
        icon: 'fa-file-invoice-dollar',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        items: [
            { title: '報價單製作', desc: '依據業務提供的產品項目與價格，套用公司標準格式製作報價單。' },
            { title: '訂單建檔', desc: '將客戶確認的訂單輸入至 ERP 系統或 Excel 訂單管理表。' },
            { title: '合約用印流程', desc: '檢查合約欄位是否填寫完整，並協助跑內部用印流程（但不負責審閱法律條款）。' },
            { title: '出貨單據協助', desc: '製作出貨單、發票開立申請單。' },
            { title: '名片建檔', desc: '將業務帶回的名片或參展收集的資料，輸入至指定系統。' },
            { title: '銷售報表整理', desc: '每週協助彙整業務的業績數字，製作基礎的銷售報告（僅做統計，不負責分析）。' },
            { title: '庫存查詢', desc: '協助業務向倉儲部門查詢現貨狀況。' },
            { title: '出貨追蹤', desc: '追蹤貨物是否已發出，並將物流單號回報給業務或客戶。' },
            { title: '樣品寄送', desc: '負責樣品打包、安排快遞寄送給客戶。' },
        ]
    },
];

const ServiceSpecsModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('accounting');

    if (!isOpen) return null;

    const activeData = SERVICE_SPECS.find(s => s.id === activeTab);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">愜易居職能規範</h2>
                        <p className="text-gray-500 text-sm mt-1">標準化作業流程，確保服務品質一致性</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-full overflow-hidden">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 p-4 overflow-y-auto">
                        <div className="space-y-2">
                            {SERVICE_SPECS.map((spec) => (
                                <button
                                    key={spec.id}
                                    onClick={() => setActiveTab(spec.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center ${activeTab === spec.id
                                        ? 'bg-white shadow-md text-biz-600 font-bold ring-1 ring-biz-100'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${activeTab === spec.id ? 'bg-biz-100' : 'bg-gray-200'}`}>
                                        <i className={`fas ${spec.icon} text-sm ${activeTab === spec.id ? 'text-biz-600' : 'text-gray-500'}`}></i>
                                    </div>
                                    {spec.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white relative">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                            <i className={`fas ${activeData.icon} text-9xl transform translate-x-10 -translate-y-10`}></i>
                        </div>

                        <div className="relative z-10 animate-fade-in">
                            <div className="flex items-center mb-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mr-4 ${activeData.bg} ${activeData.color}`}>
                                    <i className={`fas ${activeData.icon}`}></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800">{activeData.title}</h3>
                            </div>

                            <div className="grid gap-6">
                                {activeData.items.map((item, index) => (
                                    <div key={index} className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className={`w-2 h-8 rounded-full ${activeData.bg.replace('bg-', 'bg-opacity-50 ')} bg-current ${activeData.color} mr-4`}></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-900 transition-colors shadow-lg shadow-gray-200"
                    >
                        關閉
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSpecsModal;
