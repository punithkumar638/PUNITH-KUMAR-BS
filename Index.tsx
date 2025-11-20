import { Button } from "@/components/ui/button";
import { Sprout, CloudRain, TrendingUp, BookOpen } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import PincodeSearch from "@/components/PincodeSearch";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import GovernmentLinkCard from "@/components/GovernmentLinkCard";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-farm.jpg";
import teamBackground from "@/assets/team-background.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Sprout,
      title: t('cropManagement'),
      description: t('cropManagementDesc'),
      info: "Get personalized crop recommendations based on your location, soil type, and season",
      links: [
        { label: "Crop Advisory", url: "https://farmer.gov.in/croptechsol.aspx" },
        { label: "Soil Health Card", url: "https://soilhealth.dac.gov.in/" }
      ]
    },
    {
      icon: CloudRain,
      title: t('weatherInsights'),
      description: t('weatherInsightsDesc'),
      info: "Access real-time weather forecasts and rainfall data for Karnataka",
      links: [
        { label: "IMD Weather", url: "https://mausam.imd.gov.in/" },
        { label: "Meghdoot App", url: "https://farmer.gov.in/meghdootapp.aspx" }
      ]
    },
    {
      icon: TrendingUp,
      title: t('marketPrices'),
      description: t('marketPricesDesc'),
      info: "Track daily market prices across Karnataka APMCs to get the best rates",
      links: [
        { label: "APMC Prices", url: "https://agrimis.karnataka.gov.in/" },
        { label: "eNAM Portal", url: "https://www.enam.gov.in/" }
      ]
    },
    {
      icon: BookOpen,
      title: t('agriculturalResources'),
      description: t('agriculturalResourcesDesc'),
      info: "Explore farming techniques, government schemes, and agricultural knowledge",
      links: [
        { label: "Kisan Portal", url: "https://farmer.gov.in/" },
        { label: "KVK Locations", url: "https://kvk.icar.gov.in/" }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              {t('heroTitle1')}
              <span className="text-primary block">{t('heroTitle2')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Pincode Search Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <PincodeSearch />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('featuresTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('featuresSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('teamTitle')} <span className="text-primary">{t('teamTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('teamSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <TeamCard name="POORVITH RAJ" role="Team Member" />
            <TeamCard name="PUNITH KUMAR BS" role="Team Member" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamCard name="PRAJWAL A KUMAR" role="Team Member" />
            <TeamCard name="PREETHAM SHETTER" role="Team Member" />
            <TeamCard name="PREETHAM CP" role="Team Member" />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-[hsl(var(--forest-green))] rounded-2xl p-12 md:p-16 text-center shadow-[var(--shadow-strong)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
            >
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </section>

      {/* Government Resources Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('govLinksTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('govLinksSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <GovernmentLinkCard
              title="Raitha Samparka"
              description="Karnataka's unified farmer services portal for subsidies, schemes, and agricultural support"
              url="https://raithamitra.karnataka.gov.in/"
            />
            <GovernmentLinkCard
              title="Karnataka Agriculture Department"
              description="Official portal for agricultural policies, schemes, and department information"
              url="https://krishimaratavahini.karnataka.gov.in/"
            />
            <GovernmentLinkCard
              title="Bhoomi - Land Records"
              description="View and download land records, RTC, and mutation records online"
              url="https://landrecords.karnataka.gov.in/"
            />
            <GovernmentLinkCard
              title="Seva Sindhu"
              description="Government services portal for various certificates and online services"
              url="https://sevasindhu.karnataka.gov.in/"
            />
            <GovernmentLinkCard
              title="Karnataka Horticulture"
              description="Information on horticulture schemes, subsidies, and crop guidance"
              url="https://karnatakahorticulture.in/"
            />
            <GovernmentLinkCard
              title="APMC Market Prices"
              description="Live market prices from Agricultural Produce Market Committees across Karnataka"
              url="https://agrimis.karnataka.gov.in/"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            {t('footer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
