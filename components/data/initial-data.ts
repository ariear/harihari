const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Take out the garbage', image_link: 'https://cdns.klimg.com/merdeka.com/i/w/news/2021/03/24/1288581/540x270/perbedaan-lari-dan-jogging-ketahui-masing-masing-manfaatnya.jpg' },
    'task-2': { id: 'task-2', title: 'Watch my favorite show' },
    'task-3': { id: 'task-3', title: 'Charge my phone', image_link: 'https://gallery.poskota.co.id/storage/Foto/santai-2.jpg' },
    'task-4': { id: 'task-4', title: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      colorPoint: '#000000',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;