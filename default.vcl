vcl 4.0;

backend default {
    .host = "127.0.0.1";
    .port = "8081";
}

sub vcl_recv {
    if (req.http.Cookie) {
        set req.http.X-Theme = regsub(req.http.Cookie, ".*theme=([^;]+);?.*", "\1");
    }
    return (hash);
}

sub vcl_hash {
    hash_data(req.http.X-Theme);
}

sub vcl_backend_response {
    unset beresp.http.Cache-Control;
    set beresp.http.Cache-Control = "workbee-cache, max-age=86400";
    set beresp.ttl = 86400s;
    return (deliver);
}

sub vcl_deliver {
    # Set headers to indicate whether the content was served from cache
    if (obj.hits > 0) {
        set resp.http.X-Cache = "HIT";
    } else {
        set resp.http.X-Cache = "MISS";
    }

    return (deliver);
}
