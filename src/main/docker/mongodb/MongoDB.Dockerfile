FROM mongo:8.2.11
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
