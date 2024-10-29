import React from 'react';

const AboutHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white h-[500px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/dfdf/9fbe/8441a58290c5621ca9225a40489eb022?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBmw9DomjAZo83XqSGg5xY1Z5LBnetf67-5RCDunE3f41h~dG-BXPFFtg8qi8LY0bqdXsql38NsKoT2UOzSGw7xeI85jVgq2VtzNKj7Zq~uDm-zJlDQBrnRA01xc7uIHJl0ZMSnRGgXTDukzmKdfakYO2c73fHdcyocbIob4z0agDt-3W6xA6KO-WVlRHX9W7YvSU8kj9wE0EaIDIoVBV0N8JQZuahzJ~NDDZLcnmajpNb~lBFsW1DxTGEBX-QU0KnOW3kbgTdq2J3-X2iZPiDO59O~t9BBjyC3FiSzpqEjTzzYaZA8bx37S0PM5bMHq9fJa1r4vdbQ3W5cyIB8cbw__"
          alt="Background"
          className="w-full opacity-25"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 md:pb-12">
        <div className="w-full text-center">
          <h1 className="font-semibold text-[32px] sm:text-[48px] md:text-[58px] font-poppins leading-[1.2] mb-0">
            Together, We Drive Your Success
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
