FROM mongo:8.2.4
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
