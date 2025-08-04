import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  const specialties = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="pt-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-6">
        {/* Filter Toggle (mobile) */}
        <button
          onClick={() => setShowFilter((f) => !f)}
          className={`
            sm:hidden py-2 px-4 border rounded text-sm
            transition-all ${showFilter ? 'bg-teal-600 text-white' : 'text-gray-700'}
          `}
        >
          Filters
        </button>

        {/* Sidebar Filters */}
        <aside
          className={`
            flex-col gap-4 text-sm text-gray-700
            ${showFilter ? 'flex' : 'hidden sm:flex'}
          `}
        >
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() =>
                navigate(
                  speciality === spec
                    ? '/doctors'
                    : `/doctors/${encodeURIComponent(spec)}`
                )
              }
              className={`
                w-[94vw] sm:w-auto text-left pl-3 pr-6 py-2
                border border-gray-300 rounded transition-all
                ${
                  speciality === spec
                    ? 'bg-teal-100 text-teal-800'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              {spec}
            </button>
          ))}
        </aside>

        {/* Doctors Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterDoc.map((doc) => (
            <div
              key={doc._id}
              onClick={() => {
                navigate(`/appointment/${doc._id}`);
                window.scrollTo(0, 0);
              }}
              className="
                border border-teal-100 rounded-xl overflow-hidden
                cursor-pointer transform transition-transform duration-300
                hover:-translate-y-2
              "
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-48 object-cover bg-teal-50"
              />
              <div className="p-4 space-y-2">
                <div
                  className={`
                    flex items-center gap-2 text-sm
                    ${doc.available ? 'text-green-600' : 'text-gray-400'}
                  `}
                >
                  <span
                    className={`
                      w-2 h-2 rounded-full
                      ${doc.available ? 'bg-green-600' : 'bg-gray-400'}
                    `}
                  />
                  <span>{doc.available ? 'Available' : 'Not Available'}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-600">{doc.speciality}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Doctors;
