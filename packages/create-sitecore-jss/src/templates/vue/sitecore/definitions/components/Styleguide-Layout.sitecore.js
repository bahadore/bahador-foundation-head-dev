// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Styleguide-Layout',
    templateName: '<%- helper.getAppPrefix(appPrefix, appName) %>Styleguide-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['<%- helper.getAppPrefix(appPrefix, appName) %>jss-styleguide-layout'],
  });
}
