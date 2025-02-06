"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Technology category type
type TechnologyCategory = {
  id: string;
  name: string;
  isActive?: boolean;
};

// Technology item type
type Technology = {
  name: string;
  icon: string;
  category: string;
};

// Categories data
const categories: TechnologyCategory[] = [
  { id: "mobile-apps", name: "Mobile Apps", isActive: true },
  { id: "web-platforms", name: "Web Platforms" },
  { id: "cross-platforms", name: "Cross Platforms" },
  { id: "crm", name: "CRM" },
  { id: "database", name: "Database" },
  { id: "cloud-devops", name: "Cloud & DevOps" },
];

// Technologies data
const technologies: Record<string, Technology[]> = {
  // Mobile Apps
  ios: [
    { name: "Swift", icon: "assets/icons/swift.svg", category: "mobile-apps" },
    { name: "UI Kit", icon: "assets/icons/uikit.svg", category: "mobile-apps" },
    { name: "RxSwift", icon: "assets/icons/rxswift.svg", category: "mobile-apps" },
    { name: "Combine", icon: "assets/icons/combine.svg", category: "mobile-apps" },
    { name: "MVVM", icon: "assets/icons/mvvm.svg", category: "mobile-apps" },
    { name: "Alamofire", icon: "assets/icons/alamofire.svg", category: "mobile-apps" },
    { name: "Core Data", icon: "assets/icons/coredata.svg", category: "mobile-apps" },
  ],
  android: [
    { name: "Kotlin", icon: "assets/icons/kotlin.svg", category: "mobile-apps" },
    { name: "MVVM", icon: "assets/icons/mvvm.svg", category: "mobile-apps" },
    { name: "RxJava", icon: "assets/icons/rxjava.svg", category: "mobile-apps" },
    { name: "Java", icon: "assets/icons/java.svg", category: "mobile-apps" },
    { name: "Retrofit", icon: "assets/icons/retrofit.svg", category: "mobile-apps" },
    { name: "Jetpack", icon: "assets/icons/jetpack.svg", category: "mobile-apps" },
  ],

  // Web Platforms
  frontend: [
    { name: "React", icon: "assets/icons/react.svg", category: "web-platforms" },
    { name: "Next.js", icon: "assets/icons/nextjs.svg", category: "web-platforms" },
    { name: "TypeScript", icon: "assets/icons/typescript.svg", category: "web-platforms" },
    { name: "Tailwind CSS", icon: "assets/icons/tailwind.svg", category: "web-platforms" },
    { name: "Vue.js", icon: "assets/icons/vuejs.svg", category: "web-platforms" },
    { name: "Angular", icon: "assets/icons/angular.svg", category: "web-platforms" },
    { name: "Javascript", icon: "assets/icons/javascript.svg", category: "web-platforms" },
    { name: "Rest Api", icon: "assets/icons/restapi.svg", category: "web-platforms" },
  ],
  backend: [
    { name: "Node.js", icon: "assets/icons/nodejs.svg", category: "web-platforms" },
    { name: "Express", icon: "assets/icons/express.svg", category: "web-platforms" },
    { name: "Python", icon: "assets/icons/python.svg", category: "web-platforms" },
    { name: "Django", icon: "assets/icons/django.svg", category: "web-platforms" },
    { name: "GraphQL", icon: "assets/icons/graphql.svg", category: "web-platforms" },
    { name: "PHP", icon: "assets/icons/php.svg", category: "web-platforms" },
    { name: "Laravel", icon: "assets/icons/laravel.svg", category: "web-platforms" },
    { name: "Ruby", icon: "assets/icons/ruby.svg", category: "web-platforms" },
    { name: "Rails", icon: "assets/icons/rails.svg", category: "web-platforms" },
  ],

  // Cross Platforms
  mobile: [
    { name: "React Native", icon: "/icons/react-native.svg", category: "cross-platforms" },
    { name: "Flutter", icon: "/icons/flutter.svg", category: "cross-platforms" },
    { name: "Ionic", icon: "/icons/ionic.svg", category: "cross-platforms" },
    { name: "Xamarin", icon: "/icons/xamarin.svg", category: "cross-platforms" },
    { name: "Capacitor", icon: "/icons/capacitor.svg", category: "cross-platforms" },
  ],
  desktop: [
    { name: "Electron", icon: "/icons/electron.svg", category: "cross-platforms" },
    { name: "Tauri", icon: "/icons/tauri.svg", category: "cross-platforms" },
    { name: "Qt", icon: "/icons/qt.svg", category: "cross-platforms" },
    { name: "NW.js", icon: "/icons/nwjs.svg", category: "cross-platforms" },
  ],

  // CRM
  enterprise: [
    { name: "Salesforce", icon: "/icons/salesforce.svg", category: "crm" },
    { name: "SAP", icon: "/icons/sap.svg", category: "crm" },
    { name: "Oracle CRM", icon: "/icons/oracle-crm.svg", category: "crm" },
    { name: "Microsoft Dynamics", icon: "/icons/dynamics.svg", category: "crm" },
  ],
  cloud: [
    { name: "HubSpot", icon: "/icons/hubspot.svg", category: "crm" },
    { name: "Zoho", icon: "/icons/zoho.svg", category: "crm" },
    { name: "Pipedrive", icon: "/icons/pipedrive.svg", category: "crm" },
    { name: "Monday.com", icon: "/icons/monday.svg", category: "crm" },
  ],

  // Database
  sql: [
    { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
    { name: "MySQL", icon: "/icons/mysql.svg", category: "database" },
    { name: "Oracle", icon: "/icons/oracle.svg", category: "database" },
    { name: "SQLite", icon: "/icons/sqlite.svg", category: "database" },
    { name: "SQL Server", icon: "/icons/sqlserver.svg", category: "database" },
  ],
  nosql: [
    { name: "MongoDB", icon: "/icons/mongodb.svg", category: "database" },
    { name: "Redis", icon: "/icons/redis.svg", category: "database" },
    { name: "Cassandra", icon: "/icons/cassandra.svg", category: "database" },
    { name: "Firebase", icon: "/icons/firebase.svg", category: "database" },
    { name: "DynamoDB", icon: "/icons/dynamodb.svg", category: "database" },
  ],

  // Cloud & DevOps
  cloud_providers: [
    { name: "AWS", icon: "/icons/aws.svg", category: "cloud-devops" },
    { name: "Azure", icon: "/icons/azure.svg", category: "cloud-devops" },
    { name: "Google Cloud", icon: "/icons/gcloud.svg", category: "cloud-devops" },
    { name: "DigitalOcean", icon: "/icons/digitalocean.svg", category: "cloud-devops" },
  ],
  devops_tools: [
    { name: "Docker", icon: "/icons/docker.svg", category: "cloud-devops" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg", category: "cloud-devops" },
    { name: "Jenkins", icon: "/icons/jenkins.svg", category: "cloud-devops" },
    { name: "GitLab CI", icon: "/icons/gitlab.svg", category: "cloud-devops" },
    { name: "Terraform", icon: "/icons/terraform.svg", category: "cloud-devops" },
  ],
};

// Section titles mapping
const sectionTitles: Record<string, { title: string; sections: Record<string, string> }> = {
  "mobile-apps": {
    title: "Mobile Development",
    sections: {
      ios: "iOS Development",
      android: "Android Development"
    }
  },
  "web-platforms": {
    title: "Web Development",
    sections: {
      frontend: "Frontend Development",
      backend: "Backend Development"
    }
  },
  "cross-platforms": {
    title: "Cross-Platform Development",
    sections: {
      mobile: "Mobile Solutions",
      desktop: "Desktop Solutions"
    }
  },
  "crm": {
    title: "CRM Solutions",
    sections: {
      enterprise: "Enterprise CRM",
      cloud: "Cloud CRM"
    }
  },
  "database": {
    title: "Database Technologies",
    sections: {
      sql: "SQL Databases",
      nosql: "NoSQL Databases"
    }
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    sections: {
      cloud_providers: "Cloud Providers",
      devops_tools: "DevOps Tools"
    }
  }
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("mobile-apps");

  const renderTechnologySection = (sectionKey: string, title: string, techs: Technology[]) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-full p-4 hover:text-white  hover:bg-purple-600 flex items-center space-x-3 "
          >
            <div className="w-8 h-8 flex items-center justify-center ">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain "
              />
            </div>
            <span className="font-medium text-xl">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCategoryContent = () => {
    const categoryInfo = sectionTitles[activeCategory];
    if (!categoryInfo) return null;

    return Object.entries(categoryInfo.sections).map(([sectionKey, sectionTitle]) => {
      const sectionTechs = technologies[sectionKey];
      if (!sectionTechs) return null;

      return renderTechnologySection(sectionKey, sectionTitle, sectionTechs);
    });
  };

  return (
    <section className="py-24 bg-white ">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mx-auto"
        >
          <h2 className="text-5xl font-bold text-purple-600 mb-6">Technologies we use</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hire from our pool of 350+ specialized experts in web, mobile, and software
            engineering, specializing in the latest technologies and frameworks, ready to
            scale your development teams effortlessly.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full  font-medium text-xl transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Technology Sections */}
          <div className="space-y-8">
            {renderCategoryContent()}
          </div>
        </motion.div>
      </div>
    </section>
  );
}