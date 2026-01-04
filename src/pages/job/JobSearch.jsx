import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_JOBS } from '../../constants/jobs';
import JobDetailModal from '../../components/JobDetailModal';

const JobSearch = () => {
    const navigate = useNavigate();
    const [filterType, setFilterType] = useState('all');
    const [selectedJob, setSelectedJob] = useState(null);

    const filteredJobs = filterType === 'all'
        ? MOCK_JOBS
        : MOCK_JOBS.filter(job => job.type === filterType);

    const handleApply = (job) => {
        alert(`已成功應徵職缺：${job.title}`);
        setSelectedJob(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <JobDetailModal
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
                onApply={handleApply}
            />
            {/* Nav */}
            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/talent')}>
                        <span className="font-bold text-xl text-talent-600 tracking-wider">愜意居</span>
                        <span className="text-xs text-gray-400 ml-2 border-l pl-2">Job Seeker</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-talent-600 relative">
                            <i className="fas fa-bell"></i>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="w-8 h-8 bg-talent-100 rounded-full flex items-center justify-center text-talent-700 font-bold border border-talent-200">
                            A
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
                {/* Sidebar Filter */}
                <aside className="md:w-1/4">
                    <div className="bg-white p-4 rounded-lg shadow-sm sticky top-20">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800">篩選條件</h3>
                            <button
                                className="text-xs text-gray-500 hover:text-talent-600"
                                onClick={() => setFilterType('all')}
                            >
                                清除
                            </button>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">工作類型</h4>
                            <div className="space-y-2">
                                {['短期', '長期', '專案', '排班'].map(type => (
                                    <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="jobType"
                                            checked={filterType === type}
                                            onChange={() => setFilterType(type)}
                                            className="form-radio text-talent-600 focus:ring-talent-500"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-talent-600">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">地區</h4>
                            <div className="flex flex-wrap gap-2">
                                {['台北市', '新北市', '台中市'].map(city => (
                                    <span key={city} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4">
                    <div className="mb-4 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-800">最新職缺 <span className="text-sm font-normal text-gray-500">({filteredJobs.length})</span></h2>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">排序:</span>
                            <select className="text-sm border-none bg-transparent focus:ring-0 text-gray-700 font-medium cursor-pointer">
                                <option>最新發布</option>
                                <option>時薪最高</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {filteredJobs.map(job => (
                            <div
                                key={job.id}
                                className="bg-white p-5 rounded-lg shadow-sm border border-transparent hover:border-talent-300 transition-all group flex flex-col sm:flex-row justify-between sm:items-center cursor-pointer"
                                onClick={() => setSelectedJob(job)}
                            >
                                <div className="mb-4 sm:mb-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${job.type === '短期' ? 'bg-blue-50 text-blue-600' :
                                            job.type === '長期' ? 'bg-green-50 text-green-600' :
                                                'bg-purple-50 text-purple-600'
                                            }`}>
                                            {job.type}
                                        </span>
                                        <span className="text-xs text-gray-400">{job.date}</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-talent-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="text-sm text-gray-500 flex items-center gap-3">
                                        <span><i className="fas fa-building mr-1"></i> {job.company}</span>
                                        <span><i className="fas fa-map-marker-alt mr-1"></i> {job.location}</span>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        {job.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right flex flex-row sm:flex-col justify-between items-end">
                                    <div className="mb-0 sm:mb-2">
                                        <span className="text-xs text-gray-400 block sm:hidden">時薪</span>
                                        <span className="text-2xl font-bold text-talent-600">${job.rate}</span>
                                        <span className="text-xs text-gray-500 ml-1">/ hr</span>
                                    </div>
                                    <button
                                        className="bg-talent-600 hover:bg-talent-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md shadow-talent-500/20 transition-all transform active:scale-95"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedJob(job);
                                        }}
                                    >
                                        立即應徵
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Mock */}
                    <div className="mt-8 flex justify-center">
                        <div className="flex gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50 text-gray-400"><i className="fas fa-chevron-left"></i></button>
                            <button className="w-8 h-8 flex items-center justify-center rounded bg-talent-600 text-white font-bold">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50 text-gray-600">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50 text-gray-600">3</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50 text-gray-600"><i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default JobSearch;
