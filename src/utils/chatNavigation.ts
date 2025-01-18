import { NavigateFunction } from 'react-router-dom';

interface RoutePattern {
  pattern: RegExp;
  route: string;
}

// Define route patterns and their corresponding paths
const routePatterns: RoutePattern[] = [
    // Mission & Vision
    { pattern: /\b(mission|our mission|company mission|purpose|objectives|core values|ethos|guiding principles)\b/i, route: '/mission' },
    { pattern: /\b(vision|our vision|future vision|dream|aspiration|long-term goals|foresight|future direction)\b/i, route: '/vision' },
    
    // Technology & Solutions
    { pattern: /\b(technology|tech|how it works|ai technology|innovation|tools|platform|advanced tech|AI systems)\b/i, route: '/technology' },
    { pattern: /\b(solution|solutions|your solution|problem-solving|approach|strategies|method|answers|remedies)\b/i, route: '/solution' },
    { pattern: /\b(explore|demo|try|test|hands-on|experience|trial|discover|navigate)\b/i, route: '/explore-technology' },
    
    // Services & Features
    { pattern: /\b(services|offerings|what you (offer|do)|solutions provided|packages|provisions|service options|deliverables)\b/i, route: '/services' },
    { pattern: /\b(features|capabilities|what can you do|advantages|functions|benefits|tools|options|possibilities)\b/i, route: '/services' },
    
    // Impact & Results
    { pattern: /\b(impact|results|success|case studies|achievements|outcomes|influence|track record|effect)\b/i, route: '/impact' },
    { pattern: /\b(detection|real.?time|monitoring|live tracking|alerts|surveillance|instant data|data feeds|live analysis)\b/i, route: '/real-time-detection' },
    
    // Partnership & Community
    { pattern: /\b(partner|partnership|collaborate|join|alliance|teamwork|affiliate|work together|cooperate)\b/i, route: '/partner' },
    { pattern: /\b(community|communities|together|group|network|shared goals|collaborative|unite|association)\b/i, route: '/community' },
    
    // Education & Learning
    { pattern: /\b(education|learn|training|resources|knowledge|courses|tutorials|knowledge base|guides|study)\b/i, route: '/education' },
    
    // About & Contact
    { pattern: /\b(about|company|who are you|team|organization|profile|history|background|overview)\b/i, route: '/about' },
    { pattern: /\b(contact|reach|connect|talk|inquire|email|phone|support|get in touch|assistance)\b/i, route: '/about' },
    
    // Environmental Focus
    { pattern: /\b(environment|environmental|ecosystem|protection|nature|sustainability|eco-friendly|green initiatives|ecology)\b/i, route: '/environmental-damage' },
    { pattern: /\b(biodiversity|marine life|ocean life|wildlife|species diversity|habitat protection|fauna|flora|conservation)\b/i, route: '/biodiversity' },
    
    // Innovation & Research
    { pattern: /\b(innovation|research|development|advances|breakthroughs|progress|forward-thinking|new ideas|technological progress)\b/i, route: '/innovation' },
    { pattern: /\b(transparency|open|trust|clear|accountability|honesty|fairness|integrity|openness)\b/i, route: '/transparency' },
    
    // Additional Endpoints
    { pattern: /\b(ecosystem|nature|sustainability|environmental health|ecosystem balance|ecological harmony)\b/i, route: '/ecosystem' },
    { pattern: /\b(economic impact|market effect|economic analysis|financial impact|cost-effectiveness|value proposition)\b/i, route: '/economic-impact' },
    { pattern: /\b(sar technology|synthetic aperture radar|satellite imaging|radar data|SAR analysis|space radar)\b/i, route: '/sar-technology' },
    { pattern: /\b(challenges|issues|limitations|hurdles|pain points|barriers|obstacles|current problems)\b/i, route: '/challenges' },
    { pattern: /\b(demo|see it in action|live demo|technology showcase|product demonstration|try it out|interactive preview)\b/i, route: '/demo' },
    { pattern: /\b(rapid response|immediate action|fast solutions|emergency response|quick support|instant action)\b/i, route: '/rapid-response' },
    { pattern: /\b(actionable insights|valuable insights|decision-making|strategic data|insightful analytics|key findings)\b/i, route: '/actionable-insights' },
    { pattern: /\b(impact assessment|evaluation|analysis|outcome measurement|impact analysis|effect evaluation)\b/i, route: '/impact-assessment' },
    { pattern: /\b(join mission|get involved|contribute|make a difference|be part of|support our cause|participate)\b/i, route: '/join-mission' },
    { pattern: /\b(sustainability|green practices|renewable solutions|eco-friendly innovation|long-term viability|sustainable development)\b/i, route: '/sustainability' },
    { pattern: /\b(global collaboration|worldwide partnerships|international teamwork|global effort|universal cooperation|cross-border alliances)\b/i, route: '/global-collaboration' }
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