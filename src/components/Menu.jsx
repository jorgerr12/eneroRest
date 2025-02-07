import { useState } from 'react';
import PDFViewer from './PDFViewer';
const categories = [
  {
    name: 'Carta Dia',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    pdfUrl: '/menu.pdf'
  },
  {
    name: 'Carta noche',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
    pdfUrl: '/menu.pdf'
  },
]
const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);



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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map(category => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <button
                  onClick={() => handleMenuClick(category.pdfUrl)}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  View Menu →
                </button>
              </div>
            </div>
          ))}
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