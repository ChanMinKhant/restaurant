import { useState } from 'react';
import { useParams } from 'react-router-dom';
const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    role: '',
    phone: '',
    email: '',
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
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
    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.role ||
      !formData.email
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data for submission
    const itemData = new FormData();
    itemData.append('name', formData.name);
    itemData.append('address', formData.address);
    itemData.append('phone', formData.phone);
    itemData.append('role', formData.role);
    itemData.append('email', formData.email);
    if (formData.image) {
      itemData.append('image', formData.image);
    }

    // TODO: Send itemData to backend API
    console.log('Submitting:', formData);
    alert('User added successfully!');
  };
  const pageHeading = id == 'new' ? 'Add new User' : 'Edit User';
  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>{pageHeading}</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name */}
        <div>
          <label className='block text-gray-700 font-medium'>Name</label>
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
          <label className='block text-gray-700 font-medium'>Address</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 font-medium'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 font-medium'>Phone</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className='block text-gray-700 font-medium'>User Role</label>
          <select
            name='role'
            value={formData.role}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400'
            required
          >
            <option value=''>Select Role</option>
            <option value='starter'>Staff</option>
            <option value='main'>Chef</option>
          </select>
        </div>

        {/* Description */}

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
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
