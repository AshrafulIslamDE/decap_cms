window.CMS_MANUAL_INIT = true;

const config = {
  backend: {
    name: 'gitlab',
    repo: 'tsp-c-devops/gtoxperience-project',
    branch: 'feature/decap_cms',
    auth_type: 'pkce',
    app_id: process.env.DECAP_APP_ID,
    api_root: 'https://gitlab.cgi-berlin.cloud/api/v4',
    base_url: 'https://gitlab.cgi-berlin.cloud'
  },
  // Add your media_folder, collections, etc. here
  media_folder: 'static/images',
  public_folder: '/images',
  collections: [
    // Your collections here
  ]
};

// Initialize the CMS manually
window.addEventListener('load', function() {
  window.netlifyIdentity = null; // Clean any netlify identity (if you were using it)
  window.CMS.init({ config });
});

export default config;