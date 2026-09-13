{
  description = "lossless-slides-site devshell, composed from Lossless aspects";

  inputs = {
    # `development`, not the default branch: that is where the aspects land first.
    lossless.url = "github:lossless-group/lossless-monorepo/development";
    flake-parts.follows = "lossless/flake-parts";
  };

  outputs = inputs@{ flake-parts, lossless, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ lossless.flakeModules.default ];

      # An Astro site: node, pnpm, bun, deno, typescript.
      perSystem.lossless.shells.default = [ "js" ];
    };
}
