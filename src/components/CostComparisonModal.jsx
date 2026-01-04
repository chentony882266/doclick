import React from 'react';

const CostComparisonModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[80] flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50 sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">成本效益分析</h2>
                        <p className="text-gray-500 text-sm mt-1">愜易居營運模組 vs 傳統固定編制</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8 bg-gray-100 flex items-center justify-center">
                    <img
                        src="/images/cost_comparison.png"
                        alt="成本比較表"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-white flex justify-center sticky bottom-0 z-10">
                    <button
                        onClick={onClose}
                        className="bg-biz-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-biz-700 transition-colors shadow-lg"
                    >
                        了解更多細節
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CostComparisonModal;
