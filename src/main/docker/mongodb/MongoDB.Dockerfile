FROM mongo:4.2.7
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
