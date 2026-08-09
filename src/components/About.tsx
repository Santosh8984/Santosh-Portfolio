import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain,  Trophy,  Users, Database,BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA and visualization.',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into scalable, efficient solutions.',
  },
  {
  title: "SQL",
  icon: Database,
  description: "Advanced SQL queries and database optimization"
},
{
  icon: BarChart3,
  title: "Power BI",
  description: "Building interactive dashboards using DAX, Power Query, and data visualization."
},
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver exceptional results',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming Data into Actionable Business Insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I enjoy working with data and turning complex information into clear, actionable insights that help businesses make better decisions. Through hands-on projects, I’ve built experience with SQL, Power BI, Excel, and Python, focusing on data cleaning, analysis, visualization, and interactive dashboard development. I’m passionate about solving real-world business problems with data and continuously improving my skills to build practical, impactful, and user-focused analytics solutions.
              </p>
              <p>
                I enjoy turning raw data into meaningful business insights through thoughtful analysis and intuitive visualizations. Using <span className="text-primary font-medium">Power BI</span>, <span className="text-primary font-medium">SQL</span>, <span className="text-primary font-medium">Excel</span>, and <span className="text-primary font-medium">Python</span>, I build dashboards and analytical solutions that help organizations monitor performance, uncover trends, and make data-driven decisions. I’m committed to continuous learning and focused on creating reliable, scalable, and impactful data solutions.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
