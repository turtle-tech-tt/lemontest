self.addEventListener('install', event => {
    console.log('Service worker installed');
  });
  
  self.addEventListener('fetch', event => {
    // Puoi aggiungere cache qui se vuoi
  });
  