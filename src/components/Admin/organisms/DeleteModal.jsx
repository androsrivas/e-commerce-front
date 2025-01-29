

function DeleteModal({ isOpen, onClose, productId, deleteProductById }) {
  const handleDelete = async (id) => {
    if (!id) {
      console.error('Product ID is undefined or null');
      alert('Product ID is missing.');
      return;
    }
      try {
        await deleteProductById(id);
        alert('Product deleted.');
        onClose();
      } catch (error) {
        alert('Error deleting product.');
      }
   
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">Delete Product</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <p className="text-black">Are you sure you want to delete this product?</p>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => handleDelete(productId)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteModal;
