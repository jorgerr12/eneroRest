import { useState } from 'react';
import PDFViewer from './PDFViewer';

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);

  const dayMenuUrl = '/menu.pdf';
  const nightMenuUrl = '/bar-menu.pdf';

  const handleMenuClick = (url) => {
    setCurrentPdf(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPdf(null);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Nuestro Menú</h2>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleMenuClick(dayMenuUrl)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Menú Día
          </button>
          <button
            onClick={() => handleMenuClick(nightMenuUrl)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Menú Noche
          </button>
        </div>

        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-1"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="bg-white rounded-lg p-2 w-full max-w-4xl max-h-[90vh] overflow-auto">
              <div className="flex justify-end mb-2">
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="h-[70vh]">
                {currentPdf && <PDFViewer fileUrl={currentPdf} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;