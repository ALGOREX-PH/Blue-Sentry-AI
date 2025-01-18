import { NavigateFunction } from 'react-router-dom';

interface RoutePattern {
  pattern: RegExp;
  route: string;
}

// Define route patterns and their corresponding paths
const routePatterns: RoutePattern[] = [
  // Mission & Vision
  { pattern: /\b(mission|our mission|company mission)\b/i, route: '/mission' },
  { pattern: /\b(vision|our vision|future vision)\b/i, route: '/vision' },
  
  // Technology & Solutions
  { pattern: /\b(technology|tech|how it works|ai technology)\b/i, route: '/technology' },
  { pattern: /\b(solution|solutions|your solution)\b/i, route: '/solution' },
  { pattern: /\b(explore|demo|try|test)\b/i, route: '/explore-technology' },
  
  // Services & Features
  { pattern: /\b(services|offerings|what you (offer|do))\b/i, route: '/services' },
  { pattern: /\b(features|capabilities|what can you do)\b/i, route: '/services' },
  
  // Impact & Results
  { pattern: /\b(impact|results|success|case studies)\b/i, route: '/impact' },
  { pattern: /\b(detection|real.?time|monitoring)\b/i, route: '/real-time-detection' },
  
  // Partnership & Community
  { pattern: /\b(partner|partnership|collaborate|join)\b/i, route: '/partner' },
  { pattern: /\b(community|communities|together)\b/i, route: '/community' },
  
  // Education & Learning
  { pattern: /\b(education|learn|training|resources)\b/i, route: '/education' },
  
  // About & Contact
  { pattern: /\b(about|company|who are you|team)\b/i, route: '/about' },
  { pattern: /\b(contact|reach|connect|talk)\b/i, route: '/about' },
  
  // Environmental Focus
  { pattern: /\b(environment|environmental|ecosystem|protection)\b/i, route: '/environmental-damage' },
  { pattern: /\b(biodiversity|marine life|ocean life)\b/i, route: '/biodiversity' },
  
  // Innovation & Research
  { pattern: /\b(innovation|research|development|advances)\b/i, route: '/innovation' },
  { pattern: /\b(transparency|open|trust)\b/i, route: '/transparency' }
];

export function checkForNavigation(message: string, navigate: NavigateFunction): boolean {
  for (const { pattern, route } of routePatterns) {
    if (pattern.test(message)) {
      navigate(route);
      return true;
    }
  }
  return false;
}