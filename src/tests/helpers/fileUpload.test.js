import { fileUpload } from '../../helpers/fileUpload';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'netotests',
  api_key: '766697199853974',
  api_secret: '6pcAMeoCwcx-Szimn9sPtD93dwM',
});

describe('Tests in fileUpload', () => {
  test('should upload a file and return a url', async () => {
    const resp = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    );
    const blob = await resp.blob();

    const file = new File([blob], 'picture.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    const { deleted } = await cloudinary.v2.api.delete_resources(imageId);
    expect(deleted).toEqual({ [imageId]: 'deleted' });
  });

  test('should return an error', async () => {
    const file = new File([], 'picture.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
