import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus velit ac enim sagittis commodo. Integer pellentesque fringilla metus, non maximus justo dictum sit amet. Curabitur dignissim, tellus non condimentum congue, nisl elit vehicula ligula, sit amet blandit felis felis at massa. Aenean semper sollicitudin convallis. Cras sit amet rhoncus mauris. Integer interdum bibendum dolor, vitae varius erat sagittis ac. Vestibulum bibendum lacus pharetra, molestie nulla ac, facilisis ipsum. Donec ut bibendum neque. Etiam sodales pulvinar rutrum.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
