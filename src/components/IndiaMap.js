import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IndiaMap() {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState(null);

  const handleStateClick = (slug) => {
    navigate(`/states/${slug}`);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore India by <span className="heading-gradient">States</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Click on any state to discover its unique culture, heritage, and tourist attractions
          </p>
        </div>

        {/* Map Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Hovered State Name Display */}
          {hoveredState && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 z-30 pointer-events-none">
              <div className="bg-gray-900 border-2 border-accent-orange px-8 py-4 rounded-xl shadow-2xl animate-fade-in">
                <p className="text-accent-orange font-bold text-xl whitespace-nowrap">
                  {hoveredState}
                </p>
              </div>
            </div>
          )}

          {/* SVG Map - More Accurate India Shape */}
          <div className="bg-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
            <svg
              viewBox="0 0 800 1000"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Jammu & Kashmir - Top */}
              <path
                d="M 250,50 L 280,45 L 310,48 L 335,58 L 355,75 L 365,95 L 360,115 L 345,128 L 320,132 L 295,128 L 270,115 L 255,95 L 248,70 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Jammu & Kashmir')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('jammu-kashmir')}
              />

              {/* Ladakh */}
              <path
                d="M 365,95 L 395,85 L 425,88 L 450,100 L 465,120 L 460,142 L 440,155 L 415,158 L 390,150 L 370,135 L 360,115 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Ladakh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('ladakh')}
              />

              {/* Himachal Pradesh */}
              <path
                d="M 270,115 L 295,128 L 320,132 L 345,128 L 360,140 L 358,165 L 340,178 L 315,180 L 290,175 L 268,160 L 260,138 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Himachal Pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('himachal-pradesh')}
              />

              {/* Punjab */}
              <path
                d="M 240,155 L 268,160 L 290,175 L 295,195 L 288,215 L 268,225 L 245,220 L 230,205 L 228,180 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Punjab')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('punjab')}
              />

              {/* Haryana & Delhi */}
              <path
                d="M 268,225 L 288,215 L 310,220 L 328,235 L 332,255 L 322,275 L 300,282 L 278,278 L 260,265 L 255,245 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Haryana & Delhi')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('haryana')}
              />

              {/* Uttarakhand */}
              <path
                d="M 315,180 L 340,178 L 365,185 L 385,200 L 395,220 L 390,242 L 372,255 L 348,258 L 328,250 L 318,235 L 310,220 L 310,195 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Uttarakhand')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('uttarakhand')}
              />

              {/* Uttar Pradesh */}
              <path
                d="M 322,275 L 348,258 L 372,255 L 410,262 L 445,275 L 475,295 L 495,320 L 500,348 L 490,375 L 468,390 L 438,395 L 408,390 L 378,380 L 350,365 L 330,345 L 320,320 L 318,295 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Uttar Pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('uttar-pradesh')}
              />

              {/* Rajasthan */}
              <path
                d="M 140,245 L 190,235 L 230,240 L 255,245 L 278,278 L 300,282 L 318,295 L 320,320 L 315,355 L 300,395 L 275,430 L 245,455 L 210,468 L 175,468 L 145,455 L 120,425 L 105,385 L 100,345 L 105,300 L 120,265 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Rajasthan')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('rajasthan')}
              />

              {/* Gujarat */}
              <path
                d="M 75,425 L 105,385 L 120,425 L 145,455 L 175,468 L 195,495 L 205,530 L 210,565 L 200,600 L 180,625 L 155,635 L 125,635 L 95,620 L 70,590 L 55,555 L 50,515 L 55,475 L 65,445 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Gujarat')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('gujarat')}
              />

              {/* Madhya Pradesh */}
              <path
                d="M 210,468 L 245,455 L 275,430 L 315,430 L 350,435 L 390,445 L 425,460 L 455,480 L 475,510 L 480,545 L 468,575 L 440,595 L 405,605 L 370,608 L 335,600 L 300,585 L 265,565 L 235,540 L 215,510 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Madhya Pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('madhya-pradesh')}
              />

              {/* Chhattisgarh */}
              <path
                d="M 440,595 L 468,575 L 495,578 L 525,590 L 550,610 L 560,640 L 555,670 L 538,695 L 515,705 L 488,708 L 465,700 L 445,680 L 435,655 L 432,625 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Chhattisgarh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('chhattisgarh')}
              />

              {/* Maharashtra */}
              <path
                d="M 180,625 L 210,615 L 245,615 L 280,625 L 315,645 L 345,670 L 365,700 L 375,735 L 370,765 L 350,785 L 320,795 L 285,790 L 250,775 L 220,750 L 195,720 L 175,685 L 170,655 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Maharashtra')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('maharashtra')}
              />

              {/* Goa */}
              <path
                d="M 195,720 L 212,710 L 228,718 L 232,738 L 225,755 L 210,758 L 198,748 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Goa')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('goa')}
              />

              {/* Karnataka */}
              <path
                d="M 210,758 L 250,775 L 285,790 L 320,795 L 350,808 L 372,835 L 382,870 L 380,905 L 365,935 L 340,955 L 305,965 L 270,960 L 240,945 L 218,920 L 205,885 L 200,850 L 202,810 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Karnataka')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('karnataka')}
              />

              {/* Kerala */}
              <path
                d="M 218,920 L 240,945 L 252,975 L 258,1010 L 255,1045 L 245,1075 L 230,1090 L 215,1085 L 205,1055 L 200,1020 L 198,985 L 200,950 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Kerala')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('kerala')}
              />

              {/* Tamil Nadu */}
              <path
                d="M 270,960 L 305,965 L 340,955 L 375,960 L 405,980 L 428,1010 L 438,1045 L 435,1080 L 420,1108 L 395,1120 L 360,1122 L 325,1110 L 295,1090 L 270,1065 L 255,1045 L 252,1010 L 252,975 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Tamil Nadu')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('tamil-nadu')}
              />

              {/* Andhra Pradesh */}
              <path
                d="M 380,905 L 418,895 L 455,900 L 488,920 L 512,950 L 525,985 L 522,1020 L 505,1045 L 480,1055 L 450,1055 L 420,1045 L 395,1020 L 375,985 L 368,950 L 370,920 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Andhra Pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('andhra-pradesh')}
              />

              {/* Telangana */}
              <path
                d="M 370,765 L 405,755 L 435,760 L 460,778 L 472,805 L 470,835 L 455,858 L 430,868 L 405,868 L 380,855 L 365,830 L 362,800 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Telangana')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('telangana')}
              />

              {/* Odisha */}
              <path
                d="M 515,705 L 545,695 L 575,700 L 600,720 L 615,750 L 618,785 L 610,820 L 590,845 L 565,855 L 535,855 L 510,840 L 495,815 L 485,785 L 485,750 L 495,725 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Odisha')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('odisha')}
              />

              {/* Jharkhand */}
              <path
                d="M 468,575 L 495,555 L 525,555 L 552,568 L 572,590 L 575,618 L 568,645 L 550,662 L 525,668 L 500,665 L 480,650 L 470,625 L 465,598 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Jharkhand')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('jharkhand')}
              />

              {/* West Bengal */}
              <path
                d="M 572,590 L 598,575 L 625,575 L 648,590 L 665,615 L 672,645 L 670,678 L 658,705 L 638,720 L 615,722 L 595,715 L 580,695 L 575,668 L 575,640 L 578,615 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('West Bengal')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('west-bengal')}
              />

              {/* Bihar */}
              <path
                d="M 490,375 L 515,365 L 545,368 L 575,382 L 600,405 L 610,435 L 608,465 L 595,490 L 572,505 L 545,510 L 520,505 L 498,490 L 485,465 L 482,435 L 485,405 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Bihar')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('bihar')}
              />

              {/* Sikkim */}
              <path
                d="M 672,350 L 690,345 L 705,355 L 708,375 L 698,390 L 682,392 L 670,380 L 668,362 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Sikkim')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('sikkim')}
              />

              {/* Arunachal Pradesh */}
              <path
                d="M 705,265 L 745,255 L 780,265 L 808,285 L 825,315 L 825,348 L 812,375 L 785,392 L 755,395 L 728,388 L 708,375 L 698,355 L 695,330 L 698,300 L 700,280 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Arunachal Pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('arunachal-pradesh')}
              />

              {/* Assam */}
              <path
                d="M 682,392 L 708,375 L 728,388 L 755,395 L 775,410 L 788,435 L 785,465 L 768,485 L 742,495 L 715,495 L 692,485 L 675,465 L 668,440 L 670,415 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Assam')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('assam')}
              />

              {/* Nagaland */}
              <path
                d="M 775,410 L 798,405 L 815,420 L 820,445 L 812,468 L 795,478 L 778,475 L 768,460 L 768,435 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Nagaland')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('nagaland')}
              />

              {/* Manipur */}
              <path
                d="M 768,485 L 788,490 L 802,508 L 802,530 L 790,545 L 772,548 L 758,538 L 752,520 L 755,500 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Manipur')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('manipur')}
              />

              {/* Mizoram */}
              <path
                d="M 758,538 L 772,548 L 778,568 L 775,590 L 762,605 L 745,608 L 735,595 L 735,575 L 742,555 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Mizoram')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('mizoram')}
              />

              {/* Tripura */}
              <path
                d="M 715,495 L 735,505 L 745,525 L 745,548 L 735,565 L 720,568 L 705,558 L 698,538 L 700,518 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Tripura')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('tripura')}
              />

              {/* Meghalaya */}
              <path
                d="M 675,465 L 692,485 L 705,505 L 705,528 L 692,542 L 675,545 L 660,535 L 652,515 L 655,495 L 665,478 Z"
                className="state-path"
                onMouseEnter={() => setHoveredState('Meghalaya')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick('meghalaya')}
              />

              <style>{`
                .state-path {
                  fill: #374151;
                  stroke: #1f2937;
                  stroke-width: 1.5;
                  cursor: pointer;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .state-path:hover {
                  fill: #FF9933;
                  stroke: #FFFFFF;
                  stroke-width: 2.5;
                  filter: drop-shadow(0 0 12px rgba(255, 153, 51, 0.8));
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-gray-900 border border-gray-800 rounded-full px-8 py-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-600 rounded border border-gray-700"></div>
              <span className="text-gray-300 font-medium">Default State</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-accent-orange rounded border border-white"></div>
              <span className="text-gray-300 font-medium">Hover/Active</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6 max-w-lg mx-auto">
            Hover over any state to see its name • Click to explore detailed information about culture, attractions, and heritage
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndiaMap;