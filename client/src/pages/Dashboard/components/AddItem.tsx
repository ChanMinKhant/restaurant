import { useState } from 'react';
import { useParams } from 'react-router-dom';
const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null as File | null,
  });
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const pageHeading = id === 'new' ? 'Add Item' : 'Edit Item';
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data for submission
    const itemData = new FormData();
    itemData.append('name', formData.name);
    itemData.append('price', formData.price);
    itemData.append('category', formData.category);
    itemData.append('description', formData.description);
    if (formData.image) {
      itemData.append('image', formData.image);
    }

    // TODO: Send itemData to backend API
    console.log('Submitting:', formData);
    alert('Item added successfully!');
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>{pageHeading}</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name */}
        <div>
          <label className='block text-gray-700 font-medium'>Item Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className='block text-gray-700 font-medium'>Price ($)</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className='block text-gray-700 font-medium'>Category</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          >
            <option value=''>Select Category</option>
            <option value='starter'>Starter</option>
            <option value='main'>Main Course</option>
            <option value='dessert'>Dessert</option>
            <option value='drinks'>Drinks</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className='block text-gray-700 font-medium'>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className='block text-gray-700 font-medium'>
            Upload Image
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='block rounded-full bg-blue-500 text-white p-2'
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt='Preview'
              className='mt-2 w-32 h-32 object-cover rounded-md shadow-md'
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
