"use client";

import React, { useState } from 'react';

export const RegisterForm = () => {
  // Форма деректерін сақтау үшін state қолданамыз
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'student',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Тіркелу деректері:", formData);
    // Осында Backend-ке (API) сұраныс жіберу логикасы болады
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Аты және Тегі - бір қатарда */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Аты</label>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Алихан" 
            className="input-field" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Тегі</label>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Смаилов" 
            className="input-field" 
            required 
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email пошта</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@uni.kz" 
          className="input-field" 
          required 
        />
      </div>

      {/* Рөлді таңдау */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Мен ...</label>
        <select 
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="input-field appearance-none"
        >
          <option value="student">Студентпін (тағылымдама іздеймін)</option>
          <option value="company">Компаниямын (тағылымдама ұсынамын)</option>
          <option value="university">Университетпін (бақылаушы)</option>
        </select>
      </div>

      {/* Құпия сөз */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Құпия сөз</label>
        <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••" 
          className="input-field" 
          required 
        />
      </div>

      {/* Растау құпия сөзі */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Құпия сөзді қайталаңыз</label>
        <input 
          type="password" 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••" 
          className="input-field" 
          required 
        />
      </div>

      <button type="submit" className="w-full btn-primary py-3.5 text-base shadow-indigo-200">
        Тіркелу
      </button>
    </form>
  );
};