module.exports = {
  mySidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'install/quickstart',
        'install/requirements',
        'install/configuration',
        'install/network_options',
        'install/ha',
        'install/methods',
        'install/containerd_registry_configuration',
        'install/airgap',
        'install/windows_airgap',
        'install/server_roles',
        'install/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Upgrades',
      items:[
        'upgrade/upgrade',
        'upgrade/manual_upgrade',
        'upgrade/automated_upgrade',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items:[
        'security/about_hardened_images',
        'security/hardening_guide',
        'security/cis_self_assessment16',
        'security/cis_self_assessment123',
        'security/fips_support',
        'security/pod_security_policies',
        'security/pod_security_standards',
        'security/selinux',
        'security/secrets_encryption',
      ],
    },
    'architecture',
    'cluster_access',
    'backup_restore',
    'networking',
    'helm',
    'advanced',
    {
      type: 'category',
      label: 'Reference',
      items:[
        {
          type: 'autogenerated',
          dirName: 'reference', // Generate sidebar slice from docs/architecture
        },
      ],
    },
    'known_issues',
  ],
};