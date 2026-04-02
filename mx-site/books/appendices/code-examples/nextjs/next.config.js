/**
 * @file next.config.js
 * @description AI-Native Website Configuration for Next.js
 * @version 1.0
 * @author Tom Cranstoun
 *
 * @mx:category mx-content
 * @mx:status active
 * @mx:contentType script
 * @mx:tags configuration
 * @mx:partOf mx-os
 */
// AI-Native Website Configuration for Next.js
// Add HTTP Link headers for AI agent discovery

module.exports = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            // Change yoursite.com to your actual domain
            value: '<https://yoursite.com/llms.txt>; rel="llms-txt", <https://yoursite.com/ai-agents.md>; rel="agent-manifest"'
          }
        ]
      }
    ];
  }
};
