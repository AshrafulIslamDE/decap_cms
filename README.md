# GTOexperience Project:

Welcome to the GTOexperience project! This site provides an overview of strategic offerings, including services like AI and automation, sovereign cloud solutions, and more. Below is a guide to the structure of this project and how content is organized and managed.

## Folder Structure

- `data/`: Contains YAML files for different data sections used throughout the site.
  - `client-need/`: Contains YAML files defining client needs for various services (e.g., `ai-and-automation`, `sovereign-public-private-cloud`).
  - `contact/`: Stores YAML files for contact details used in different sections of the site.
  - `feedback/`: Contains YAML files related to feedback sections on various pages.
  - `intro/`: Contains YAML files related to introductory content on various pages.
  - `sales/`: Stores YAML files related to sales and opportunity development content.

- `content/`: Contains all the content for the website.
  - **index.md**: The main landing page that aggregates various sections like services, feedback, and contact.
  - **pages/**: Contains subpages for specific service-related content. Each subpage is an individual service page that includes client needs, feedback, and contact sections. The subpages are:
    - `managed-security-services.md`
    - `partnerships_and_alliances.md`
    - `ai-and-automation.md`
    - `further_services_and_glossary.md`
    - `sovereign-public-private-cloud.md`
    - `squad-delivery.md`
    - `transformational-services-and-solutions.md`

## Shortcodes Used

The following shortcodes are used throughout the site:

- `{{<intro-smart >}}`: Includes an introductory section from a YAML file in the `intro` folder.
- `{{<text-only-section >}}`: Used to wrap text-only content, making it easily reusable across multiple pages.
- `{{<home-service-card >}}`: Used to display a service card on the home page or service-related sections.
- `{{<sales  >}}`: Includes sales enablement materials.
- `{{<feedback-box >}}`: Displays a feedback section from the `feedback` folder.
- `{{<contact >}}`: Displays a contact section from the `contact` folder.
- `{{<client-needs >}}`: Renders client needs data related to a specific service (e.g., `ai-and-automation`).
- `{{<sales-enablement-and-opportunity-development-materials >}}`: Includes sales-related content from the `sales` folder.
- `{{<block-footercontact >}}`: Displays footer contact information.

## Data Files

### `data/client-need/`

Contains YAML files that define the needs and requirements of clients for specific offerings like `ai-and-automation` or `sovereign-public-private-cloud`. For example:

- `ai-and-automation.yaml`
- `sovereign-public-private-cloud.yaml`

These files contain structured data that is dynamically injected into the site using shortcodes.

**To update content in these files:**
1. Open the appropriate YAML file (e.g., `ai-and-automation.yaml`).
2. Modify or add the required data fields.
3. Save the file to apply the changes.

## Pages and Layout

The site's content is divided into various pages and subpages. Each page pulls data dynamically from the `data/` folder using shortcodes and renders it using the layouts defined in the `layouts` folder.

- **index.md**: The main landing page located in the `content/` folder. This aggregates various sections like services, feedback, and contact.
- **Subpages**: Individual service-related pages located in `content/pages/`. Each subpage (e.g., `ai-and-automation.md`, `sovereign-public-private-cloud.md`) contains specific content related to the service, including client needs, feedback, and contact sections.

## Running the Hugo Server and Building the Site

To view the site locally and make sure everything is working correctly:

1. **Start the Hugo server**: In your terminal, run the following command to start the Hugo server and view the site at `http://localhost:1313/`:

   ```bash
   hugo server

2. **Clear the public folder**: If you've made any significant changes to the content, themes, or layout, delete the public folder before running hugo build to ensure you're building the latest version of the site.

   ```bash
   hugo build
